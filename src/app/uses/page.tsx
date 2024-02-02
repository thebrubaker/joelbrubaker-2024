import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Equipment and tools I use to stay productive and have fun.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Equipment and tools I use to stay productive and have fun."
      intro="I'm a big fan of tools and gadgets that help me be more productive and have more fun. Here are some of my favorites."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M2 Pro, 16GB RAM (2023)">
            The M2 Pro is a beast. I can&apos;t believe how much faster it is
            than my old Intel-based MacBook Pro. I still use my old one when
            traveling but this is my main machine now.
          </Tool>
          <Tool title='LG 27" 4K IPS Monitor'>
            I spent a lot of time trying to find a monitor that was the perfect
            size and resolution for me, with USB-C hub that allows my macbook to
            plug in and charge from a single cord.
          </Tool>
          <Tool title="Sabrent USB 2.0 Sharing Switch">
            I constantly need to toggle my mouse, keyboard and camera between my
            work and personal computer, and this nifty little switch makes it a
            breeze. I tap the button and everything switches over to my second
            monitor.
          </Tool>
          <Tool title="nuphy Air75 Mechanical Keyboard (Blue Switches)">
            I picked up this little keyboard on a whim and it’s been great. I
            really enjoy the compact form factor for the times I need to bring
            it with me into the office. This is my first mechanical keyboard and
            I&apos;m really enjoying the blue switches.
          </Tool>
          <Tool title="Razer DeathAdder v2 Pro">
            This mouse is fine - it&apos;s honestly better with a PC than a Mac.
            I previously used a magic mouse but had to work from a Windows
            workstation for a while, and I got used to the ergonomics of a more
            traditional mouse.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Video / Photography">
          <Tool title="Sony a7 III + Sony 2/28 + Sigma 1.4/35">
            This is by far my favorite camera I’ve ever owned. I use it for
            photography, videography, and as a webcam for meetings. The blurred
            background is fantastic, and Sony provides software and drivers for
            using it as a webcame. I&apos;m still building my lens collection
            after switching from Canon, and so far I&apos;m quite happy with the
            Sigma 1.4/35.
          </Tool>
          <Tool title="Elgato Key Light Air">
            As fantastic as the Sony camera is, it&apos;s almost useless for
            video calls without good lighting. This light is fantastic and has a
            companion app that lets me control it from my computer over wifi.
            Compact, reasonably priced, and easy to use.
          </Tool>
          <Tool title="Shure MV7 Microphone">
            A fantastic microphone for video calls and recording. It&apos;s USB
            and XLR, and I use it for all of my calls and recordings. I also
            really enjoy plugging my headphones into the microphone so I can
            confirm the audio quality and volume.
          </Tool>
          <Tool title="Manfrotto">
            I purchase all of my tripods and camera accessories from Manfrotto.
            I&apos;ve used them for nearly a decade and have never been
            disappointed. They&apos;re a bit more expensive than other brands,
            but the quality is worth it. I own their Magic Arm, Monopod, Gimbal,
            and a mini tripod for my desk microphone.
          </Tool>
          <Tool title="Adobe Lightroom">
            I&apos;ll be honest, I hate Adobe with the fire of a thousand suns,
            but Lightroom is the best photo editing software out there. I use it
            for all of my photography, and it creates easy sharable albums for
            family and friends.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development">
          <Tool title="Visual Studio Code">
            I don&apos;t have to say much about this one. It&apos;s the best
            code editor out there, excellent ecosystem of plugins, and it&apos;s
            free.
          </Tool>
          <Tool title="TablePlus">
            A fantastic, simple database client that supports all the databases
            I use. It&apos;s fast, reliable, and has a great UI.
          </Tool>
          <Tool title="Medis">
            Another fantastic database client, but for Redis. I use this one
            when I need to do anything with Redis, which is often on
            SpaceTraders.
          </Tool>
          <Tool title="Chrome Remote Desktop">
            I was so happy when I discovered how simple this was to set up and
            use between my macbooks and PC. It&apos;s free and allows me to jump
            between my work and personal computers with ease.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Sorry Sketch, but Figma won me over and I&apos;ve never looked back.
            It&apos;s the best tool for designing interfaces and collaborating
            with others, and every company I&apos;ve worked at in the last 5
            years has used it.
          </Tool>
          <Tool title="Midjourney">
            This one is controversial but I find Midjourney to be a fantastic
            collaboration tool to brainstorm and generate images when time is a
            constraint and the ideas are small. It&apos;s not perfect, but
            I&apos;ve had a lot of success generating logos, placeholder images
            for websites, and exploring visual concepts for SpaceTraders.
          </Tool>
          <Tool title="Tailwind UI">
            My mind is still blown away by the amount of value the Tailwind
            folks have given away for such a low price. I&apos;m always
            brainstorming business and product ideas, and Tailwind&apos;s UI
            templates help me very quickly draft up a visual concept for a new
            product or feature.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="GitHub Copilot">
            I&apos;ll be honest, I was very excited about Copilot when it was
            announced, and it&apos;s proven to be the most productive tool
            I&apos;ve used in a long time. It&apos;s not perfect, but I&apos;m
            easily twice as fast at writing code with it. It&apos;s just a
            really smart auto-complete, so you need to know what you&apos;re
            doing to use it effectively.
          </Tool>
          <Tool title="ChatGPT 4">
            You can probably guess I&apos;m a huge proponent of AI in
            development and creative work. ChatGPT 4 is a fantastic tool for
            generating code, writing, and brainstorming. I use it for everything
            from drafting emails to generating code snippets and game concepts
            for SpaceTraders. I literally can&apos;t imagine working without it.
          </Tool>
          <Tool title="Obsidian">
            I&apos;ve moved all of my note-taking and knowledge management into
            Obsidian. It&apos;s a fantastic tool for organizing and connecting
            ideas, and I use it for everything from drafting articles to
            brainstorming new features for SpaceTraders.
          </Tool>
          <Tool title="Linear">
            I&apos;ve used a lot of project management tools, and Linear is by
            far my favorite. It&apos;s simple, fast, and has a fantastic
            interface. I use it for everything from managing SpaceTraders
            features to tracking my personal tasks and goals.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Music">
          <Tool title="Yamaha CLP-725 Clavinova Digital Piano">
            Our family recently purchased this digital piano and it&apos;s been
            fantastic. I&apos;ve been playing guitar for 10 years and wanted to
            learn piano, and this has been a fantastic instrument for learning
            and practicing. Beautiful sound, weighted keys, and it looks great
            in our living room.
          </Tool>
          <Tool title="Taylor Academy 10e Acoustic Electric Guitar">
            I&apos;ve had this guitar for nearly half a decade and it&apos;s
            been a fantastic instrument. I really enjoy the sound and feel of
            it, and the built-in tuner and pickup are fantastic.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
