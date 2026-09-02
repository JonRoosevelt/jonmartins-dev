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
          I&apos;m a fullstack developer from Brazil, working specifically with
          NodeJS, Python, React, Typescript and .NET
        </p>
        <br />
        <p>
          Though I am mostly focused in these technologies, I truly believe that
          developers should see tech as tools. If you&apos;re lost on a beach
          and you need to write a message to a plane, you won&apos;t use the
          most modern pen to do it. You won&apos;t use an iPad to do it.
          You&apos;ll use sticks, stones and palm leaves! 🏝
        </p>
        <br />
        <p>
          To ensure a nice final product, I really like to write tests. For me
          TDD is one of the best ways to make sure you won&apos;t have that many
          bugs in production - though, you will 🤣
        </p>
        <br />
        <p>
          Want to say hi, see my code or just read some awesome tweets? Follow
          me up on one of my links
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
          I was born in Brazil, a son of the 80&apos;s. I started drawing as a
          little kid, got my first gig as an illustrator at 13. At 16 I switched
          to design and started a technical course in SENAI, which is a famous
          design school in Brazil. I worked from 16 to 26 as a designer, from
          printing companies to agencies and as a freelancer as well (which I
          occasionally still do).
        </p>
        <br />
        <p>
          On 2014, after the Football (yeah, it&apos;s called football and not
          soccer) World Cup, a huge crisis hit Brazil and I lost my job as a
          designer. I was already studying computer programming before so it was
          the last drop of water to make a career change.
        </p>
        <br />
        <p>
          During this period I&apos;ve enrolled in a System Analysis and Design
          minor and started to do some freelancing.
        </p>
        <br />
        <p>
          On 2019 I got my first actual job a a programmer. Ever since I have
          worked in several different companies with lots of contexts. I&apos;ve
          learned a lot, from back to front end, from testing to scrum, from
          feature branch to trunck based development, from working in flip flops
          to leaving to home at past midnight. I was able to work in lots of
          technologies and multiple background people, which have contributed to
          who I am right now.
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
