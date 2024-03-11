import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { addMemberToCommunity, createCommunity, deleteCommunity, removeMemberFromCommunity, updateCommunity } from "@/lib/actions/community.action";

export const POST = async (request) => {
    const payload = await request.json();
    const header = headers();

    const heads = {
        "svix-id": header.get("svix-id"),
        "svix-timestamp": header.get("svix-timestamp"),
        "svix-signature": header.get("svix-signature"),
    };

    const wh = new Webhook(process.env.NEXT_CLERK_WEBHOOK_SECRET || "");

    let evnt = null;

    try {
        evnt = wh.verify(
            JSON.stringify(payload),
            heads
        )
    } catch (err) {
        return NextResponse.json({ message: err }, { status: 400 });
    }
    const eventType = evnt?.type;

    //IMP: All events

    // NOTE: Creating Organization
    if (eventType === "organization.created") {
        const { id, name, slug, logo_url, image_url, created_by } =
            evnt?.data ?? {};
        try {
            await createCommunity(id, name, slug, logo_url || image_url, "org bio", created_by);
            console.log("Organization created successfully");
            return NextResponse.json({ message: "Organization created" }, { status: 201 });

        } catch (err) {
            console.log(err);
            return NextResponse.json(
                { message: "Error while creating organization" },
                { status: 500 }
            );
        }
    }

    // NOTE: Adding member to community

    if (eventType === "organizationMembership.created") {
        const { organization, public_user_data } = evnt?.data;

        try {
            await addMemberToCommunity(organization.id, public_user_data.user_id);
            console.log("Member Added to Community")
            return NextResponse.json({ message: "Member Added to Community" }, { status: 201 });

        } catch (err) {
            console.log(err);
            return NextResponse.json(
                { message: "Error in adding Member to Community" },
                { status: 500 }
            );
        }
    }

    // NOTE: Creating Invitation

    if (eventType === "organizationInvitation.created") {
        try {
            console.log("Invitation Created")
            return NextResponse.json({ message: "Invitation Created Succesfully" }, { status: 201 });

        } catch (error) {
            console.log(error);
            return NextResponse.json(
                { message: "Error in Creating Invitation" },
                { status: 500 }
            );
        }
    }

    // NOTE: Deleting Member From Organization

    if (eventType === "organizationMembership.deleted") {
        try {
            const { organization, public_user_data } = evnt?.data;

            await removeMemberFromCommunity(organization.id, public_user_data.user_id)
            console.log("User Removed From Community")

            return NextResponse.json({ message: "User Removed From Community" }, { status: 201 })

        } catch (error) {
            console.log(error);
            return NextResponse.json(
                { message: "Error in Deleting Member" },
                { status: 500 }
            );
        }
    }

    // NOTE: Updating Organization

    if (eventType === "organization.updated") {
        try {
            const { id, logo_url, name, slug } = evnt?.data;

            await updateCommunity(id, name, slug, logo_url)
            console.log("Community Update Successfully")

            return NextResponse.json({ message: "Community Updated" }, { status: 201 })

        } catch (error) {
            console.log(error);
            return NextResponse.json(
                { message: "Error in Updating Organization" },
                { status: 500 }
            );
        }
    }

    // NOTE: Deleting Organsization
    if (eventType === "organization.deleted") {
        try {
            const { id } = evnt?.data;

            await deleteCommunity(id)

            console.log("Community Delete Successfully");

            return NextResponse.json({ message: "Community Delete Successfully" }, { status: 201 })

        } catch (error) {
            console.log(error);
            return NextResponse.json(
                { message: "Error in Deleting Communiy" },
                { status: 500 }
            );
        }
    }
};