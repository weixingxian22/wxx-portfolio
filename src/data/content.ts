export const siteConfig = {
    siteName: import.meta.env.PUBLIC_SITE_NAME,
    siteUrl: import.meta.env.PUBLIC_SITE_URL,
}

interface NavItem {
    label: string;
    href: string;
    target?: string; // target是可选的，默认为_self或不指定
}

interface Nav {
    avatar?: string;
    items?: NavItem[]; // 使用数组来存储导航项，以便更灵活地添加或删除项
}

// 定义导航项
export const nav: Nav = {
	avatar:'/assets/author.jpg',
    items: [
        { label: '首页', href: '/', target: '_self' },// target 为 '_blank' 打开新链接
        { label: '项目', href: '/project', target: '_self' },
        { label: '关于', href: '/about', target: '_self' },
		{ label: '博客', href: '/blog', target: '_self' },
    ],
};

// Footer
export const footerText = `© ${new Date().getFullYear()} Wynn Xan Wei. All Rights Reserved.`

//SEO TDK
interface SeoTdk {
	title?: string
	description?: string
	keywords?: string
}
// SEO TDK 首页
export const homeTdk: SeoTdk = {
	title: '这里是设计师Wynn的个人网站',
	description: '这是我的设计师Wynn部分项目展示',
	keywords: 'Wynn,博客'
}
// SEO TDK 博客
export const blogTdk: SeoTdk = {
	title: 'Wynn的博客',
	description: '记录我的一些想法和笔记',
	keywords: 'Wynn,博客,blog'
}
// SEO TDK 关于
export const aboutTdk: SeoTdk = {
	title: '设计师Wynn的个人介绍',
	description: '设计师Wynn的个人介绍',
	keywords: 'Wynn,博客'
}
// SEO TDK  项目
export const projectTdk: SeoTdk = {
	title: 'Wynn的项目介绍',
	description: '这是我的部分项目展示',
	keywords: 'Wynn,博客,project'
}
// SEO TDK 404
export const notFoundTdk: SeoTdk = {
	title: '404 Not Found - 这里什么都没有。',
	description: '404 Not Found - 这里什么都没有。',
	keywords: '404 Not Found. 这里什么都没有。'
}

// Page Tag 页面头部的标签 Tag
interface PageTag {
	index: string
	about: string
	blog: string
	project: string
}
export const pageTag: PageTag = {
	index: 'PORTFOLIO',
	about: 'ABOUT',
	blog: 'BLOG',
	project: 'PROJECT'
}


//Page Description 页面大标题下的说明文字
interface PageDescription {
	index?: string
	project?: string
	blog?: string
	about?: string
}
export const pageDescription: PageDescription = {
	index: '我是Wynn，一位拥有超过5年经验的创意设计师，在这里可以了解更多关于我的信息，或者阅读我的一些文章和笔记。',
	project: "这是我的部分项目展示",
	about: '专注于平面、品牌、广告设计和视觉创意',
	blog: '这是我的个人笔记和想法， 希望你能够获得帮助！',
}



// FilterItem 首页作品展示筛选列表
export interface FilterItem {
	content: string
	dataGroup: string
}
export const filterItems: FilterItem[] = [
	{ content: "💎推荐", dataGroup: "recommend" },
	{ content: "书刊画册", dataGroup: "book" },
	{ content: "品牌", dataGroup: "brand" },
	{ content: "平面", dataGroup: "graphic" },
	{ content: "网页", dataGroup: "web" },
	{ content: "活动", dataGroup: "event" },
];



