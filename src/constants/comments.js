import imageAmyrobson from '../assets/imgs/imageAmyrobson.webp'
import imageJuliusomo from '../assets/imgs/imageJuliusomo.webp'
import imageMaxblagun from '../assets/imgs/imageMaxblagun.webp'
import imageRamsesmiron from '../assets/imgs/imageRamsesmiron.webp'

export default [
  {
    id: 1,
    content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: "1 month ago",
    score: 12,
    ownCommentId: 1,
    user: {
      image: imageAmyrobson,
      username: "amyrobson"
    },
    replies: []
  },
  {
    id: 2,
    content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    createdAt: "2 weeks ago",
    score: 5,
    ownCommentId: 2,
    user: {
      image: imageMaxblagun,
      username: "maxblagun"
    },
    replies: [
      {
        id: 3,
        content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        createdAt: "1 week ago",
        score: 4,
        replyingTo: "maxblagun",
        ownCommentId: 2,
        user: {
          image: imageRamsesmiron,
          username: "ramsesmiron"
        }
      },
      {
        id: 4,
        content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        createdAt: "2 days ago",
        score: 2,
        replyingTo: "ramsesmiron",
        ownCommentId: 2,
        user: {
          image: imageJuliusomo,
          username: "juliusomo"
        }
      }
    ]
  }
]