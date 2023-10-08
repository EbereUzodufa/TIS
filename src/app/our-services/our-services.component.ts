import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OurServicesComponent implements OnInit {
  services = [
    {
      icon: '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M90.625 50C90.625 55.9688 89.3438 61.625 87.0312 66.7344C85.25 66.0156 83.2969 65.625 81.25 65.625C79.6562 65.625 78.1094 65.8594 76.6563 66.3125C79.5781 61.5625 81.25 55.9844 81.25 50C81.25 41.9062 78.1719 34.5156 73.1094 28.9688C68.0625 23.4063 61.0312 19.6875 53.125 18.9063V23.4375L47.0625 18.8906L40.625 14.0625L46.7031 9.5L53.125 4.6875V9.5C74.1094 11.0938 90.625 28.6094 90.625 50Z" fill="#2B3990"/><path d="M40.625 14.0624L47.0625 18.8905C31.1719 20.3749 18.75 33.7343 18.75 49.9999C18.75 51.0624 18.7969 52.0936 18.9063 53.1249C18.8594 53.1249 18.7969 53.1249 18.75 53.1249C15.4219 53.1249 12.3438 54.1718 9.8125 55.9374C9.51563 53.9999 9.375 52.0155 9.375 49.9999C9.375 28.6718 25.8125 11.1874 46.7031 9.49988L40.625 14.0624Z" fill="#2B3990"/><path d="M68.75 90.625H50C40.9531 90.625 32.6094 87.6719 25.8438 82.6719C28.7344 81.2031 31.1094 78.8437 32.6094 75.9688C37.5781 79.2969 43.5625 81.25 50 81.25H65.625C65.625 84.7656 66.7969 88.0156 68.75 90.625Z" fill="#2B3990"/><path d="M59.375 37.5H65.625V65.625H59.375V37.5Z" fill="#EC008C"/><path d="M46.875 43.75H53.125V65.625H46.875V43.75Z" fill="#EC008C"/><path d="M34.375 50H40.625V65.625H34.375V50Z" fill="#EC008C"/><path d="M81.25 96.875C89.8794 96.875 96.875 89.8794 96.875 81.25C96.875 72.6206 89.8794 65.625 81.25 65.625C72.6206 65.625 65.625 72.6206 65.625 81.25C65.625 89.8794 72.6206 96.875 81.25 96.875Z" fill="#E6E9ED"/><path d="M90.0312 89L90.625 93.75C88.0156 95.7031 84.7656 96.875 81.25 96.875C77.7344 96.875 74.4844 95.7031 71.875 93.75L72.4688 89C73.0156 84.5781 76.7812 81.25 81.25 81.25C83.4844 81.25 85.5469 82.0781 87.1094 83.4687C88.6875 84.8437 89.75 86.7812 90.0312 89Z" fill="#F7941D"/><path d="M81.25 81.25C83.8388 81.25 85.9375 79.1513 85.9375 76.5625C85.9375 73.9737 83.8388 71.875 81.25 71.875C78.6612 71.875 76.5625 73.9737 76.5625 76.5625C76.5625 79.1513 78.6612 81.25 81.25 81.25Z" fill="#EC008C"/><path d="M25 83.0782V90.6251C25 92.3439 23.5938 93.7501 21.875 93.7501H15.625C13.9062 93.7501 12.5 92.3439 12.5 90.6251V83.0782V83.0626C13.4844 83.5001 14.5312 83.8439 15.625 84.0626C16.625 84.2657 17.6719 84.3751 18.75 84.3751C19.8281 84.3751 20.875 84.2657 21.875 84.0626C22.9688 83.8439 24.0156 83.5001 25 83.0626V83.0782Z" fill="#2B3990"/><path d="M18.9063 53.125C18.8594 53.125 18.7969 53.125 18.75 53.125C15.4219 53.125 12.3438 54.1719 9.8125 55.9375C5.76563 58.7656 3.125 63.4531 3.125 68.75C3.125 75.1562 6.98438 80.6562 12.5 83.0625C13.4844 83.5 14.5312 83.8437 15.625 84.0625C16.625 84.2656 17.6719 84.375 18.75 84.375C19.8281 84.375 20.875 84.2656 21.875 84.0625C22.9688 83.8437 24.0156 83.5 25 83.0625C25.2969 82.9531 25.5625 82.8125 25.8438 82.6719C28.7344 81.2031 31.1094 78.8437 32.6094 75.9687C33.7344 73.8125 34.375 71.3594 34.375 68.75C34.375 60.1719 27.4531 53.2031 18.9063 53.125Z" fill="#FE9838"/><path d="M89.0516 65.9547C91.125 60.8922 92.1875 55.5359 92.1875 50C92.1875 28.5594 75.8297 10.4172 54.6875 8.07031V1.5625L46.1063 7.99844C24.5953 9.97344 7.8125 28.3266 7.8125 50C7.8125 51.7516 7.94375 53.5078 8.15938 55.2406C4.15156 58.3906 1.5625 63.2688 1.5625 68.75C1.5625 75.4125 5.38125 81.1891 10.9375 84.0406V90.625C10.9375 93.2094 13.0406 95.3125 15.625 95.3125H21.875C24.4594 95.3125 26.5625 93.2094 26.5625 90.625V85.0453C33.5078 89.7047 41.5594 92.1875 50 92.1875H68.0016C71.1562 96.0016 75.9234 98.4375 81.25 98.4375C90.7266 98.4375 98.4375 90.7266 98.4375 81.25C98.4375 74.5828 94.6141 68.8047 89.0516 65.9547ZM53.0078 11.0516C73.225 12.5891 89.0625 29.6984 89.0625 50C89.0625 55.1313 88.0766 60.0953 86.1547 64.7844C84.6 64.3203 82.9547 64.0625 81.25 64.0625C80.6906 64.0625 80.1375 64.0938 79.5922 64.1469C81.6953 59.75 82.8125 54.925 82.8125 50C82.8125 33.0578 70.1156 19.0203 53.2797 17.35L51.5625 17.1797V20.3125L43.2297 14.0625L51.5625 7.8125V10.9406L53.0078 11.0516ZM64.1422 79.6875H50C44.5297 79.6875 39.2422 78.1875 34.6094 75.3688C35.4625 73.3297 35.9375 71.0953 35.9375 68.75C35.9375 68.2219 35.9047 67.7031 35.8578 67.1875H67.1875V35.9375H57.8125V64.0625H54.6875V42.1875H45.3125V64.0625H42.1875V48.4375H32.8125V58.8984C29.9969 54.8922 25.525 52.1344 20.3938 51.6453C20.3641 51.0953 20.3125 50.5469 20.3125 50C20.3125 34.775 31.5922 22.2141 46.6344 20.5219L54.6875 26.5625V20.6781C69.0563 22.9391 79.6875 35.2531 79.6875 50C79.6875 55.3109 78.2625 60.4953 75.5859 65.0422C69.3594 67.225 64.7578 72.8828 64.1422 79.6875ZM35.9375 64.0625V51.5625H39.0625V64.0625H35.9375ZM51.5625 64.0625H48.4375V45.3125H51.5625V64.0625ZM60.9375 64.0625V39.0625H64.0625V64.0625H60.9375ZM10.9375 50C10.9375 31.9 23.5797 16.3031 40.6703 12.075L38.0203 14.0625L43.1625 17.9203C28.1219 21.0703 17.1875 34.2438 17.1875 50C17.1875 50.5438 17.2406 51.0906 17.2688 51.6375C15.0656 51.8266 12.9859 52.4375 11.0984 53.3828C11.0016 52.2578 10.9375 51.1281 10.9375 50ZM4.6875 68.75C4.6875 60.9969 10.9969 54.6875 18.75 54.6875C26.5031 54.6875 32.8125 60.9969 32.8125 68.75C32.8125 74.8578 28.8906 80.0547 23.4375 81.9922V71.5875C23.9281 71.7625 24.45 71.875 25 71.875C27.5844 71.875 29.6875 69.7719 29.6875 67.1875C29.6875 64.6031 27.5844 62.5 25 62.5C22.9656 62.5 21.2469 63.8109 20.6 65.625H16.8984C16.2531 63.8109 14.5344 62.5 12.5 62.5C9.91563 62.5 7.8125 64.6031 7.8125 67.1875C7.8125 69.7719 9.91563 71.875 12.5 71.875C13.05 71.875 13.5719 71.7625 14.0625 71.5875V81.9922C8.60938 80.0547 4.6875 74.8578 4.6875 68.75ZM17.1875 68.75H20.3125V82.7203C19.7984 82.7781 19.2781 82.8125 18.75 82.8125C18.2219 82.8125 17.7016 82.7781 17.1875 82.7203V68.75ZM23.4375 67.1875C23.4375 66.3266 24.1391 65.625 25 65.625C25.8609 65.625 26.5625 66.3266 26.5625 67.1875C26.5625 68.0484 25.8609 68.75 25 68.75C24.1391 68.75 23.4375 68.0484 23.4375 67.1875ZM14.0625 67.1875C14.0625 68.0484 13.3609 68.75 12.5 68.75C11.6391 68.75 10.9375 68.0484 10.9375 67.1875C10.9375 66.3266 11.6391 65.625 12.5 65.625C13.3609 65.625 14.0625 66.3266 14.0625 67.1875ZM21.875 92.1875H15.625C14.7641 92.1875 14.0625 91.4859 14.0625 90.625V85.2719C15.5547 85.6953 17.1234 85.9375 18.75 85.9375C20.3766 85.9375 21.9453 85.6953 23.4375 85.2719V90.625C23.4375 91.4859 22.7359 92.1875 21.875 92.1875ZM50 89.0625C42.3516 89.0625 35.0469 86.8656 28.7109 82.7297C30.4547 81.4828 31.9578 79.925 33.1344 78.1281C38.2219 81.1859 44.0125 82.8125 50 82.8125H64.1422C64.3453 85.0469 64.9813 87.1547 65.9609 89.0625H50ZM73.5438 92.9984L74.0188 89.1953C74.4734 85.5563 77.5828 82.8125 81.25 82.8125C84.9172 82.8125 88.0266 85.5563 88.4812 89.1953L88.9562 92.9984C86.7406 94.4578 84.0953 95.3125 81.25 95.3125C78.4047 95.3125 75.7594 94.4578 73.5438 92.9984ZM78.125 76.5625C78.125 74.8391 79.5266 73.4375 81.25 73.4375C82.9734 73.4375 84.375 74.8391 84.375 76.5625C84.375 78.2859 82.9734 79.6875 81.25 79.6875C79.5266 79.6875 78.125 78.2859 78.125 76.5625ZM91.7953 90.5219L91.5813 88.8094C91.1359 85.2391 88.9 82.2719 85.8469 80.7625C86.8641 79.65 87.5 78.1844 87.5 76.5625C87.5 73.1156 84.6969 70.3125 81.25 70.3125C77.8031 70.3125 75 73.1156 75 76.5625C75 78.1844 75.6359 79.65 76.6516 80.7609C73.5984 82.2703 71.3641 85.2375 70.9172 88.8078L70.7031 90.5203C68.5234 88.0437 67.1875 84.8031 67.1875 81.25C67.1875 73.4969 73.4969 67.1875 81.25 67.1875C89.0031 67.1875 95.3125 73.4969 95.3125 81.25C95.3125 84.8031 93.9766 88.0437 91.7953 90.5219Z" fill="black"/></svg>',
      title: 'Product Development',
      content: 'With a wealth of experienced software engineers fluent in over a dozen programming languages and frameworks, our software development department is exceptional and capable of handling your tech needs with utmost professionalism, and ease, while applying the best new product development steps necessary throughout the conceptualization, design, development, and marketing of new products and solutions according to industry standards.'
    },
    {
      icon: '<svg width="100" height="116" viewBox="0 0 100 116" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M76.6163 90.4859H23.3837L30.9219 26.6713H69.0781L76.6163 90.4859Z" fill="#EC008C"/><path d="M69.0781 26.6711H50V90.486H76.6163L69.0781 26.6711Z" fill="#EC008C"/><path d="M21.5771 42.4393H78.4229V49.1811H21.5771V42.4393Z" fill="#EC008C"/><path d="M50 42.4393H78.4229V49.1811H50V42.4393Z" fill="#EC008C"/><path d="M72.4966 33.4128H27.5035C20.1661 33.4128 14.1967 27.3656 14.1967 19.9326L14.288 0H29.7207V11.5401H42.295V0H57.743V11.5401H70.3171V0H85.7575L85.8032 19.925C85.8034 27.3658 79.8339 33.4128 72.4966 33.4128Z" fill="#2B3990"/><path d="M85.8034 19.925L85.7577 0H70.3173V11.5401H57.7432V0H50V33.4128H72.4966C79.8339 33.4128 85.8034 27.3658 85.8034 19.925Z" fill="#2B3990"/><path d="M85.8034 103.209H14.1967V97.0512C14.1967 89.7137 20.1661 83.7442 27.5035 83.7442H72.4966C79.8339 83.7442 85.8034 89.7137 85.8034 97.0512V103.209Z" fill="#F7941D"/><path d="M72.4966 83.7442H50V103.209H85.8034V97.0512C85.8034 89.7137 79.8339 83.7442 72.4966 83.7442Z" fill="#F7941D"/><path d="M99.9998 115.719H0V112.052C0 104.714 5.96949 98.7446 13.3068 98.7446H86.6929C94.0303 98.7446 99.9998 104.714 99.9998 112.052V115.719Z" fill="#2B3990"/><path d="M100 112.052C100 104.714 94.0305 98.7446 86.6932 98.7446H50V115.719H100V112.052Z" fill="#2B3990"/></svg>',
      title: 'Product Strategy',
      content: "By paying close attention to our client's ideas and demands, we identify the focal points of the product, as well as its various solutions, benefits, and the impact it will have on not just the users or customers, but on the company as well. We then construct a product road map that details the product to be built and the different phases of development our team of engineers will embark on during a specific time frame, leading up to the release of the product."
    },
    {
      icon: '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M86.2984 67.1875C81.6453 67.1875 77.7 70.8203 77.3156 75.4578L76.6844 83.0828C76.5375 84.7156 75.2 85.9375 73.5734 85.9375H65.625C64.7641 85.9375 64.0625 86.6391 64.0625 87.5C64.0625 88.3609 64.7641 89.0625 65.625 89.0625H75.5422C77.9828 89.0625 79.9891 87.2297 80.2094 84.8L81.2547 73.2969L84.3672 73.5797L83.3219 85.0828C82.9547 89.1328 79.6109 92.1875 75.5422 92.1875H75V95.3125H95.3125V76.2016C95.3125 71.2313 91.2687 67.1875 86.2984 67.1875Z" fill="#F7941D"/><path d="M84.375 64.0625C87.8268 64.0625 90.625 61.2643 90.625 57.8125C90.625 54.3607 87.8268 51.5625 84.375 51.5625C80.9232 51.5625 78.125 54.3607 78.125 57.8125C78.125 61.2643 80.9232 64.0625 84.375 64.0625Z" fill="#F7941D"/><path d="M15.625 64.0625C19.0768 64.0625 21.875 61.2643 21.875 57.8125C21.875 54.3607 19.0768 51.5625 15.625 51.5625C12.1732 51.5625 9.375 54.3607 9.375 57.8125C9.375 61.2643 12.1732 64.0625 15.625 64.0625Z" fill="#2B3990"/><path d="M34.375 85.9375H26.4266C24.8 85.9375 23.4625 84.7156 23.3141 83.0953L22.6828 75.4578C22.2984 70.8203 18.3547 67.1875 13.7016 67.1875C8.73125 67.1875 4.6875 71.2313 4.6875 76.2016V95.3125H25V92.1875H24.4578C20.3891 92.1875 17.0453 89.1328 16.6781 85.0828L15.6328 73.5797L18.7453 73.2969L19.7906 84.8C20.0109 87.2297 22.0172 89.0625 24.4578 89.0625H34.375C35.2359 89.0625 35.9375 88.3609 35.9375 87.5C35.9375 86.6391 35.2359 85.9375 34.375 85.9375Z" fill="#2B3990"/><path d="M42.3453 42.1875C43.0719 45.7484 46.2266 48.4375 50 48.4375C53.7735 48.4375 56.9281 45.7484 57.6547 42.1875H42.3453Z" fill="#2B3990"/><path d="M41.5906 32.8125H48.4375V24.7781C45.75 24.0797 43.75 21.6531 43.75 18.75C43.75 15.3031 46.5531 12.5 50 12.5C53.4469 12.5 56.25 15.3031 56.25 18.75C56.25 21.6531 54.25 24.0797 51.5625 24.7781V32.8125H58.4094L62.6266 24.3797C63.5656 22.4984 64.0625 20.3953 64.0625 18.2938C64.0625 10.7906 57.9594 4.6875 50.4562 4.6875H49.5438C42.0406 4.6875 35.9375 10.7906 35.9375 18.2938C35.9375 20.3953 36.4344 22.4984 37.3734 24.3797L41.5906 32.8125Z" fill="#EC008C"/><path d="M44.0125 49.7671C43.8406 50.3452 43.75 50.9483 43.75 51.5624C43.75 55.0093 46.5531 57.8124 50 57.8124C53.4469 57.8124 56.25 55.0093 56.25 51.5624C56.25 50.9483 56.1594 50.3452 55.9859 49.7671C54.2656 50.8983 52.2094 51.5624 50 51.5624C47.7906 51.5624 45.7344 50.8983 44.0125 49.7671Z" fill="#F7941D"/><path d="M60.9375 37.5C60.9375 36.6391 60.2359 35.9375 59.375 35.9375H40.625C39.7641 35.9375 39.0625 36.6391 39.0625 37.5C39.0625 38.3609 39.7641 39.0625 40.625 39.0625H59.375C60.2359 39.0625 60.9375 38.3609 60.9375 37.5Z" fill="#EC008C"/><path d="M61.9453 55.2516L62.1984 54.4313L65.625 53.4954V49.6297L62.1984 48.6922L61.9453 47.8719C61.7234 47.1532 61.4234 46.4313 61.0516 45.7282L60.6516 44.9704L60.3 44.2047C59.8766 45.4266 59.2672 46.561 58.4625 47.5422C59.0578 48.7938 59.375 50.1594 59.375 51.5626C59.375 56.7329 55.1703 60.9376 50 60.9376C44.8297 60.9376 40.625 56.7329 40.625 51.5626C40.625 50.161 40.9422 48.7938 41.5375 47.5438C40.7344 46.5626 40.125 45.4266 39.7 44.2063L39.3484 44.9719L38.9484 45.7297C38.5781 46.4329 38.2766 47.1532 38.0547 47.8735L37.8016 48.6938L34.375 49.6297V53.4954L37.8016 54.4313L38.0547 55.2516C38.2766 55.9704 38.5766 56.6907 38.9484 57.3938L39.3484 58.1532L37.5844 61.2454L40.3188 63.9782L43.4094 62.2157L44.1672 62.6157C44.8703 62.986 45.5906 63.2876 46.3109 63.5094L47.1312 63.7626L48.0688 67.1891H51.9344L52.8703 63.7626L53.6906 63.5094C54.4094 63.2876 55.1297 62.9876 55.8328 62.6157L56.5922 62.2157L59.6844 63.9797L62.4188 61.2454L60.6547 58.1532L61.0547 57.3938C61.4234 56.6922 61.7234 55.9719 61.9453 55.2516Z" fill="#EC008C"/><path d="M50 21.875C51.7259 21.875 53.125 20.4759 53.125 18.75C53.125 17.0241 51.7259 15.625 50 15.625C48.2741 15.625 46.875 17.0241 46.875 18.75C46.875 20.4759 48.2741 21.875 50 21.875Z" fill="#EC008C"/><path d="M82.8125 42.1875H85.9375V45.3125H82.8125V42.1875Z" fill="#2B3990"/><path d="M82.8125 35.9375H85.9375V39.0625H82.8125V35.9375Z" fill="#2B3990"/><path d="M69.4281 20.3125L75 29.6L80.1547 21.0063C80.4125 20.5781 80.8828 20.3125 81.3812 20.3125C82.1703 20.3125 82.8125 20.9547 82.8125 21.7438V32.8125H85.9375V21.7438C85.9375 19.2313 83.8937 17.1875 81.3812 17.1875C79.789 17.1875 78.2937 18.0344 77.475 19.4L75 23.525L71.1968 17.1875H67.1312C67.1562 17.5547 67.1875 17.9203 67.1875 18.2938C67.1875 18.9688 67.1406 19.6422 67.0593 20.3125H69.4281Z" fill="#2B3990"/><path d="M14.0625 42.1875H17.1875V45.3125H14.0625V42.1875Z" fill="#F7941D"/><path d="M14.0625 35.9375H17.1875V39.0625H14.0625V35.9375Z" fill="#F7941D"/><path d="M17.1875 21.7438C17.1875 20.9547 17.8297 20.3125 18.6188 20.3125C19.1188 20.3125 19.5891 20.5781 19.8453 21.0078L25 29.6L30.5719 20.3125H32.9406C32.8594 19.6422 32.8125 18.9688 32.8125 18.2938C32.8125 17.9203 32.8438 17.5547 32.8687 17.1875H28.8031L25 23.525L22.525 19.4C21.7063 18.0344 20.2094 17.1875 18.6188 17.1875C16.1063 17.1875 14.0625 19.2313 14.0625 21.7438V32.8125H17.1875V21.7438Z" fill="#F7941D"/></svg>',
      title: 'Consultancy',
      content: "With access to a retinue of experts with decades of experience cutting across various fields and industries from renewable energy to security, health, telecommunication, and finance to mention a few, our clients are in impeccable and trusted hands, and are assured the best possible advice and guidance to achieving their product design or solving their tech needs."
    }
  ];
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  makeSvg(icon: string) {
    let svg: SafeHtml;
    svg = this.sanitizer.bypassSecurityTrustHtml(icon);
    return svg;
  }
}