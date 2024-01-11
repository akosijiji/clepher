export default interface NewsData {
    id?: any | null,
    title: string,
    banner_image: string,
    summary: string,
    time_published: string,
    authors: string[],
    url: string,
    overall_sentiment_label: string,
}