interface iTextSliser {
   text: string,
   number: number,
 }

export const textSliser = (params: iTextSliser) => {
    const { text, number } = params;

    if (number > text.length) {
        return text
    } else {
        let sliceText = text.slice(0, number)
        const pointIndex = sliceText.lastIndexOf('.')
        if (pointIndex === -1) {
            const commaIndex = sliceText.lastIndexOf(',')
            if (commaIndex === -1) {
                return `${sliceText}...`
            }
            else {
                sliceText = text.slice(0, commaIndex)
                return `${sliceText}...`
            }
        } else {
            console.log(4);
            sliceText = text.slice(0, pointIndex)
            return `${sliceText}`
        }
    }
}

textSliser({
    text: 'В Магнитогорске очень холодно, но фото для болельщиков это святое. 👌🏻💙 Завтра ждем вас на прямой трансляции матча «Метталург» - «Динамо» в 15:00 (по мск)',
    number: 80})