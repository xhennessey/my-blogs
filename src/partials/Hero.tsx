import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          你好, 欢迎光临<GradientText>XHennessey</GradientText>的博客 👋
        </>
      }
      description={
        <>
          这里有最深度的.NET知识分享，还有最全面的.NET开源项目推荐。B站账号{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            XHennessey
          </a>{' '}
          会同步更新最新视频，欢迎订阅！Github账号{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            xhennessey
          </a>{' '}
          会分享优秀的开源项目，欢迎关注！
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
    />
  </Section>
);

export { Hero };
