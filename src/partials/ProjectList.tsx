import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        我的<GradientText>作品</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Winform项目"
        description="如何开发一个Winform项目，从零到一构建指南！"
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>C#</Tags>
            <Tags color={ColorTags.LIME}>.Net</Tags>
            <Tags color={ColorTags.SKY}>Winform</Tags>
          </>
        }
      />
      <Project
        name="WPF项目"
        description="如何开发一个WPF项目，从零到一构建指南！"
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>C#</Tags>
            <Tags color={ColorTags.EMERALD}>.NET</Tags>
            <Tags color={ColorTags.YELLOW}>WPF</Tags>
          </>
        }
      />
      <Project
        name="QT项目"
        description="如何开发一个QT项目，从零到一构建指南！"
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>C++</Tags>
            <Tags color={ColorTags.INDIGO}>QT</Tags>
            <Tags color={ColorTags.ROSE}>QML</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
