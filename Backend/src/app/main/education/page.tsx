import NavbarWithAvatar from "@/app/(components)/NavbarWithAvatar";
import { nanoid } from "nanoid";
import ArticleCard from "./(components)/ArticleCard";
import getArticles from "./(components)/articles";
import { articleType } from "./dto/dto";

export default function Education() {
  const articles: Array<articleType> = getArticles();
  return (
    <>
      <NavbarWithAvatar />
      <div className="h-screen w-full pt-[80px] px-3 flex flex-col gap-4 pb-4">
        <h1 className="text-2xl font-bold text-center py-4">Education</h1>
        {articles.map((article: articleType, index: number) => {
          return <ArticleCard key={nanoid()} article={article} id={index} />;
        })}
      </div>
    </>
  );
}
