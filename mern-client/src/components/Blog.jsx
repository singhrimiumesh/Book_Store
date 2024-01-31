import { Card } from "flowbite-react";
import photo from "../assets/Profile1.jpg";
import eventpic from "../assets/Event.png";

const Blog = () => {
  return (
    <div className="mt-28 px-4 lg-px24">
      <h2 className="text-5xl font-bold text-center">Blogs</h2>

      <div className="grid gap-8 my-12 lg-grid-cols-4 sm:grid-cols-2 md:grid-cols-4 grid-cols-1">
        <Card
          className="flex flex-col max-w-sm"
          imgAlt="Student"
          imgSrc={photo}
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">
            Alumni Talk on "Navigating the Journey from St. John College to a
            Top U.S. College for MS"
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            We're excited to announce that Mr. John Deo will be on campus to
            share their journey from St. John to a top U.S. college for MS
            studies. Join us on 22 May at 11:30am in MMS Hall for valuable
            insights, tips, and a chance to connect with a successful graduate.
            Don't miss this opportunity to learn about the path to academic
            excellence in the U.S. See you there!
          </p>
        </Card>

        <Card
          className="flex flex-col max-w-sm"
          imgAlt="Student"
          imgSrc={eventpic}
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">
            Megaleio - National Level Competition
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Prepare for an exciting experience as Megaleio, a prestigious
            national-level competition, comes to showcase events like Blind C,
            RoboWar, Robo Soccer and many more. Mark your calendars for March
            and join us for a thrilling showcase of skills and creativity. Stay
            tuned for further details and registration information.
          </p>
        </Card>

        <Card
          className="flex flex-col max-w-sm"
          imgAlt="Student"
          imgSrc="https://i.pinimg.com/564x/a0/27/b1/a027b154271cb53af2dfc4a90ad1dbac.jpg"
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">
            Unlocking Creativity with Generative AI in Engineering
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Pencils down, engineers! Generative AI is igniting a design
            revolution. Imagine AI conjuring "impossible" bridges with
            unheard-of materials, or turbines optimized for any wind condition.
            AI expedites innovation by automating repetitive tasks, freeing
            engineers to explore countless possibilities in record time. Even
            non-experts can join the design party with user-friendly AI tools.
            But fear not, AI is a co-pilot, not a replacement. Human expertise
            steers the ship, ensuring designs are feasible and ethical.
            Together, we're unlocking an era of engineering marvels beyond our
            wildest dreams.
          </p>
        </Card>

        <Card
          className="flex flex-col max-w-sm"
          imgAlt="Student"
          imgSrc="https://promptsfirst.com/wp-content/uploads/2023/03/Affirmations-for-Exam-Success-1080x628.webp"
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">
            Exam Success in Engineering: Tips, Trends, and Resources
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Master your studies: Time Management: Optimize study
            sessions and balance coursework effectively. Interactive Tools:
            Enhance understanding with interactive resources for complex
            engineering concepts. Practice Exams: Refine problem-solving skills
            through simulated exam conditions. Collaborative Communities: Join
            study groups for knowledge exchange and collaboration with peers.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
