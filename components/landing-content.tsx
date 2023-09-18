import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Calvin Septyanto",
    avatar: "CS",
    title: "Software Engineer",
    description:
      "This is the best AI companion app ever! The versatility in handling multiple media formats seamlessly is genuinely next-level. It has revolutionized the way I work!",
  },
  {
    name: "Lee Jian Ming",
    avatar: "LJM",
    title: "Video Producer",
    description:
      "I've tried countless tools in my career, but none have come close to this. The video generation feature is a game-changer, offering a blend of creativity and efficiency that's hard to match. Highly recommended!",
  },
  {
    name: "Alisha Tan",
    avatar: "AT",
    title: "Digital Designer",
    description:
      "From image creation to audio enhancement, this app has transformed how I approach design. Truly next-gen technology with a seamless experience.",
  },
  {
    name: "Derrick Poh",
    avatar: "DP",
    title: "Film Director",
    description:
      "I've always looked for tools that push the boundaries of creativity. This app not only meets my expectations but exceeds them, especially in video generation. A must-have for any creator.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
