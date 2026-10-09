import Image from "next/image";

export default function Home() {
  return (
    <div className="md:w-full max-w-[736px] md:mx-auto">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center">
        <Image
          src="/jon.jpeg"
          alt="Jon Martins"
          width={100}
          height={100}
          className="w-[100px] h-[100px] rounded-full object-cover antialiased"
        />
        <div className="flex flex-col">
          <h3 className="font-bold text-3xl">Jon Martins</h3>
          <p>Artist / Developer / Designer</p>
        </div>
      </div>
      <div className="my-16">
        <h1 id="sup" className="text-3xl font-bold">
          &apos;Sup?!
        </h1>
        <br />
        <br />
        <p>Hello, my name is Jon Martins 👋🏽</p>
        <br />
        <p>
          I&apos;m a fullstack developer working mainly with Node.js, Python,
          React, TypeScript and .NET.
        </p>
        <br />
        <p>
          I see technology as a set of tools: the right choice depends on the
          problem you&apos;re solving, not on what&apos;s trending.
        </p>
        <br />
        <p>
          I care about shipping reliable products, which is why I value testing
          and TDD as a way to catch bugs before they reach production.
        </p>
        <br />
        <p>
          Want to say hi, see my code or read some awesome tweets? Follow me up
          on one of my links
        </p>
        <br />
        <p>See you! 👀</p>
        <br />
        <br />
        <h3 id="history" className="text-xl font-bold">
          History
        </h3>
        <br />
        <p>
          I&apos;ve been building software since 2019, working across a range of
          companies and contexts: from backend to frontend, from testing to
          agile processes, and across different stacks and teams.
        </p>
        <br />
        <p>
          Before moving into software, I worked as a designer and illustrator,
          and that background still shapes the way I approach building products.
        </p>
        <br />
        <br />
        <h3 id="stack" className="text-xl font-bold">
          Stack
        </h3>
        <br />
        <p>
          As I said in my introduction, I&apos;m a technology agnostic. But that
          doesn&apos;t mean I don&apos;t have my preferences. Here&apos;s a few
          of them:
        </p>
        <br />
        <div className="grid grid-cols-3 md:grid-cols-4">
          <div>
            <h4 className="text-lg font-bold text-green-100">Frontend</h4>
            <ul>
              <li>React</li>
              <li>NextJS</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-green-100">Backend</h4>
            <ul>
              <li>NestJS</li>
              <li>Express</li>
              <li>FastAPI</li>
              <li>Django</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-green-100">Languages</h4>
            <ul>
              <li>Typescript</li>
              <li>Python</li>
              <li>C#</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-green-100">Other</h4>
            <ul>
              <li>MongoDB</li>
              <li>Jest</li>
              <li>Splunk</li>
              <li>AI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
