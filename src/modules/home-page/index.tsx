import ArticleBlock from 'components/article-block/ArticleBlock';

export const HomePage: React.FC = () => {
  return (
    <div>
      <ArticleBlock title="男性のための" desc="Medical Subjects" />
      <ArticleBlock
        title="男性のための"
        subTitle="DMMオンラインクリニック"
        desc="Medical Subjects"
        isBackgroundTitle
        gender="male"
        isItalicDesc
      />
      <ArticleBlock
        title="男性のための"
        subTitle="DMMオンラインクリニック"
        desc="Medical Subjects"
        isBackgroundTitle
        gender="female"
        isItalicDesc
      />
    </div>
  );
};
