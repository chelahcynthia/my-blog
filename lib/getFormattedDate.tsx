export default function getFormattedData(dateString: string): string {
    return new Intl.DateTimeFormat('en-KE', { dateStyle: 'long'}).format
    (new Date(dateString))
}
