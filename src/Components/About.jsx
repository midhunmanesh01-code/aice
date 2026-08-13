import ScrollStack, { ScrollStackItem } from './ScrollStack';
import Particles from './Particles';
import DotField from './DotField';
import Orb from './Orb';

export default function About() {
  return (
    <section className="about" id="about">
      <ScrollStack
        useWindowScroll={true}
        itemDistance={70}
        itemScale={0.02}
        itemStackDistance={30}
        stackPosition="16%"
        scaleEndPosition="10%"
        baseScale={0.96}
        rotationAmount={0}
        blurAmount={0}
      >
        <ScrollStackItem itemClassName="about-card about-card-main">
          <div className="about-card-content">
            <div>
              <p className="about-eyebrow">01 — ABOUT AICE</p>

              <h2 className="about-title">
                A platform where
                <br />
                <span>curious minds</span> meet.
                <br />
                Ideas <span>evolve.</span>
                <br />
                Innovation becomes <span>impact.</span>
              </h2>

              <p className="about-description">
                AICE — AI Innovation Community for Excellence — is the official
                AI community of College of Engineering Chengannur.
              </p>
            </div>

            <div className="about-ai-visual">
              <Particles
                particleColors={['#5227FF', '#7655FF', '#A18BFF']}
                particleCount={220}
                particleSpread={9}
                speed={0.08}
                particleBaseSize={85}
                moveParticlesOnHover
                particleHoverFactor={0.8}
                alphaParticles
                sizeRandomness={1}
                cameraDistance={20}
                disableRotation={false}
                pixelRatio={1}
              />
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="about-card mission-card">
          <div className="mission-detail-card">
            <div className="mission-content">
              <p className="about-eyebrow">02 — MISSION</p>

              <h2>
                Learn.
                <br />
                Experiment.
                <br />
                <span>Build.</span>
              </h2>

              <p>
                Foster AI learning, innovation, research, and entrepreneurship
                through hands-on experiences and collaboration.
              </p>
            </div>

            <div className="mission-visual" aria-hidden="true">
              <DotField
                dotRadius={1.5}
                dotSpacing={14}
                bulgeStrength={67}
                glowRadius={160}
                sparkle={false}
                waveAmplitude={0}
                cursorRadius={500}
                cursorForce={0.1}
                bulgeOnly
                gradientFrom="#5227FF"
                gradientTo="#A18BFF"
                glowColor="#120F17"
              />
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="about-card vision-card">
          <div className="vision-detail-card">
            <div className="vision-content">
              <p className="about-eyebrow">03 — VISION</p>

              <h2>
                A future-ready
                <br />
                <span>AI ecosystem.</span>
              </h2>

              <p>
                Build a dynamic AI ecosystem that cultivates innovation,
                leadership, and ethical responsibility.
              </p>
            </div>

            <div className="vision-visual" aria-hidden="true">
              <Orb
                hoverIntensity={2}
                rotateOnHover
                hue={0}
                forceHoverState={false}
                backgroundColor="#000000"
              />
            </div>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </section>
  );
}