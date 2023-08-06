import { Article } from "@/types";
import ArticleItem from "../Common/ArticleItem";

function ArticleList() {
  const articles: Article[] = [
    {
      author: "fastcampus",
      avatarImgUrl:
        "https://miro.medium.com/v2/resize:fill:48:48/1*ecbKNWhiCJqQYc9yN44FJA.png",
      title: "Node.js 심플 프로젝트",
      description: "심플 프로젝트 입니다",
      keyword: "node.js",
      mainImgUrl:
        "https://miro.medium.com/v2/resize:fill:160:112/g:fp:0.5:0.23/1*Ktvy6_Ldzx9CjrrK3Vg9Fw.png",
    },
    {
      author: "fastcampus",
      avatarImgUrl:
        "https://miro.medium.com/v2/resize:fill:48:48/1*ecbKNWhiCJqQYc9yN44FJA.png",
      title: "Node.js 심플 프로젝트",
      description: "심플 프로젝트 입니다",
      keyword: "node.js",
      mainImgUrl:
        "https://miro.medium.com/v2/resize:fill:160:112/g:fp:0.5:0.23/1*Ktvy6_Ldzx9CjrrK3Vg9Fw.png",
    },
    {
      author: "fastcampus",
      avatarImgUrl:
        "https://miro.medium.com/v2/resize:fill:48:48/1*ecbKNWhiCJqQYc9yN44FJA.png",
      title: "Node.js 심플 프로젝트",
      description: "심플 프로젝트 입니다",
      keyword: "node.js",
      mainImgUrl:
        "https://miro.medium.com/v2/resize:fill:160:112/g:fp:0.5:0.23/1*Ktvy6_Ldzx9CjrrK3Vg9Fw.png",
    },
    {
      author: "fastcampus",
      avatarImgUrl:
        "https://miro.medium.com/v2/resize:fill:48:48/1*ecbKNWhiCJqQYc9yN44FJA.png",
      title: "Node.js 심플 프로젝트",
      description: "심플 프로젝트 입니다",
      keyword: "node.js",
      mainImgUrl:
        "https://miro.medium.com/v2/resize:fill:160:112/g:fp:0.5:0.23/1*Ktvy6_Ldzx9CjrrK3Vg9Fw.png",
    },
    {
      author: "fastcampus",
      avatarImgUrl:
        "https://miro.medium.com/v2/resize:fill:48:48/1*ecbKNWhiCJqQYc9yN44FJA.png",
      title: "Node.js 심플 프로젝트",
      description: "심플 프로젝트 입니다",
      keyword: "node.js",
      mainImgUrl:
        "https://miro.medium.com/v2/resize:fill:160:112/g:fp:0.5:0.23/1*Ktvy6_Ldzx9CjrrK3Vg9Fw.png",
    },
    {
      author: "fastcampus",
      avatarImgUrl:
        "https://miro.medium.com/v2/resize:fill:48:48/1*ecbKNWhiCJqQYc9yN44FJA.png",
      title: "Node.js 심플 프로젝트",
      description: "심플 프로젝트 입니다",
      keyword: "node.js",
      mainImgUrl:
        "https://miro.medium.com/v2/resize:fill:160:112/g:fp:0.5:0.23/1*Ktvy6_Ldzx9CjrrK3Vg9Fw.png",
    },{
      author: "fastcampus",
      avatarImgUrl:
        "https://miro.medium.com/v2/resize:fill:48:48/1*ecbKNWhiCJqQYc9yN44FJA.png",
      title: "Node.js 심플 프로젝트",
      description: "심플 프로젝트 입니다",
      keyword: "node.js",
      mainImgUrl:
        "https://miro.medium.com/v2/resize:fill:160:112/g:fp:0.5:0.23/1*Ktvy6_Ldzx9CjrrK3Vg9Fw.png",
    },{
      author: "fastcampus",
      avatarImgUrl:
        "https://miro.medium.com/v2/resize:fill:48:48/1*ecbKNWhiCJqQYc9yN44FJA.png",
      title: "Node.js 심플 프로젝트",
      description: "심플 프로젝트 입니다",
      keyword: "node.js",
      mainImgUrl:
        "https://miro.medium.com/v2/resize:fill:160:112/g:fp:0.5:0.23/1*Ktvy6_Ldzx9CjrrK3Vg9Fw.png",
    },{
      author: "fastcampus",
      avatarImgUrl:
        "https://miro.medium.com/v2/resize:fill:48:48/1*ecbKNWhiCJqQYc9yN44FJA.png",
      title: "Node.js 심플 프로젝트",
      description: "심플 프로젝트 입니다",
      keyword: "node.js",
      mainImgUrl:
        "https://miro.medium.com/v2/resize:fill:160:112/g:fp:0.5:0.23/1*Ktvy6_Ldzx9CjrrK3Vg9Fw.png",
    },{
      author: "fastcampus",
      avatarImgUrl:
        "https://miro.medium.com/v2/resize:fill:48:48/1*ecbKNWhiCJqQYc9yN44FJA.png",
      title: "Node.js 심플 프로젝트",
      description: "심플 프로젝트 입니다",
      keyword: "node.js",
      mainImgUrl:
        "https://miro.medium.com/v2/resize:fill:160:112/g:fp:0.5:0.23/1*Ktvy6_Ldzx9CjrrK3Vg9Fw.png",
    },
  ];

  return (
    <div className="px-4">
      {articles.map((article, index) => (
        <ArticleItem key={index} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
