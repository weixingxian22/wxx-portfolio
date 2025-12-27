export interface ProjectItem {
	id?: number; // 唯一标识符
	title: string
	title_en?: string
	description?: string
	date?: string		//发布日期
	detail?: string //详细页路径
  	url?: string  //上线链接
	tags?: string[]
	cover?: string[]
}
export const projectItems: ProjectItem[] = [

  {
		title: "华为全连接大会香港分会",
    title_en: "HUAWEI CONNECT 2021",
		date: "2021",
    detail: "detail/hw2021",
    url: "detail/hw2021",
    cover: ['hw2021/01.jpg','hw2021/04.jpg'],
		tags: ['graphic', 'event']
	},
  {
		title: "《缅甸游记》英文版书籍装帧设计",
    title_en: "Book binding design for 'Myanmar in Piety'",
		date: "2022-10-15",
		url: "/detail/mbook",
		detail: "/detail/mbook",
    cover: ['mbook/01.jpg','mbook/02.jpg','mbook/03.jpg','mbook/04.jpg'],
		tags: ['book', 'typographic']
	},
	{
		title: "香港RWA书籍装帧设计",
    title_en: "",
		date: "2025",
    detail: "/detail/rwa-book",
    url: "/detail/rwa-book",
    cover: ['10br/10-01.jpg','10br/10-04.jpg','10br/10-05.jpg','10br/10-06.jpg'],
		tags: ['Typography', 'brochure', 'book']
	},
	{
		title: "艾德金融十周年特刊",
    title_en: "EDDID Financial 10th Anniversary",
		date: "2025",
    detail: "/detail/10br",
    url: "/detail/10br",
    cover: ['rwa-book/01.jpg','rwa-book/02.jpg','rwa-book/03.jpg','rwa-book/04.jpg'],
		tags: ['Typography', 'brochure', 'book']
	},
];

