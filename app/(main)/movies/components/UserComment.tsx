import { SubTitle } from "@/components/ui/text";
import Image from "next/image"

const reviews = [
  {
    userPf: "/avatar.jpg",
    username: "Michael Raymond",
    date: "2025-11-11 04:38",
    message: "Hey Everyone I'd Love to chat with anyone let's Catch up!"
  },
  {
    userPf: "/avatar.jpg",
    username: "F9rTN7",
    date: "2025-11-10 20:08",
    message: "please season 3 upload it abeg oo"
  }
];

export default function UserComment() {
  return (
    <div>
      <SubTitle className="mb-4">
        User Reviews
      </SubTitle>
      <div className="space-y-6">
        {reviews.map((review, ind) =>
          <div
            key={ind}
            className="flex flex-col gap-4 bg-card shadow-sm border border-border px-4 py-6 rounded-lg">
            <div
              className="flex items-center gap-5"
            >
              <Image
                src={review.userPf}
                alt={review.username}
                width={50}
                height={50}
                className="rounded-full object-cover border border-border"
              />
              <div className="text-foreground/90 text-sm space-y-1">
                <h2 className="font-semibold">{review.username}</h2>
                <div className="text-foreground/80">{review.date}</div>
              </div>

            </div>

            <p className="text-sm">{review.message}</p>
          </div>
        )}

      </div>
    </div>
  )
}

