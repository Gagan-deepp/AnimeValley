import { fetchUserBookMark } from "@/lib/actions/user.actions"
import BookMarkCard from "./BookMarkCard"

const ProfileBookMark = async ({ accountId, currentUserId }) => {

  const userBookMark = await fetchUserBookMark({ userID: accountId })
  

  return (
    <section>
      <div>
        {userBookMark?.bookmarks.length > 0 ?
          <BookMarkCard data={JSON.stringify(userBookMark?.bookmarks)} />
          : <div className="w-full">
            <h3 className="text-lg font-ui-text-4 text-light-2" > No Bookmarks Added !! </h3>
          </div>}
      </div>
    </section>
  )
}

export default ProfileBookMark
