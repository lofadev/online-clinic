import ArticleBlock from 'components/article-block/ArticleBlock';

export const HomePage: React.FC = () => {
  return (
    <div>
      <ArticleBlock
        title="男性のための"
        desc="Medical Subjects"
        titleStyles={{ background: 'tertiary', color: 'white' }}
        descStyles={{ fontFamily: 'DAMION', fontSize: 'SIZE_24', color: 'tertiary' }}
        backgroundWrapper="lightGray"
      />
      <ArticleBlock title="男性のための" desc="Medical Subjects" />
      <ArticleBlock title="男性のための" desc="Medical Subjects" />
      <ArticleBlock
        title="男性のための"
        subTitle="DMMオンラインクリニック"
        desc="Medical Subjects"
        titleStyles={{ background: 'secondary', color: 'white' }}
      />
      <ArticleBlock title="男性のための" subTitle="DMMオンラインクリニック" desc="Medical Subjects" />
    </div>
  );
};
