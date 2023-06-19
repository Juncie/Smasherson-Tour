import { EventCard } from '~/shared/types';

export default function EventCard({ title, description, image, imgAlt, slug, href, date }: EventCard) {

    // get today's date from date object
    const today = new Date();
    // get the year of the date
    const year = today.getFullYear();
    // get the month of the date
    const month = today.getMonth() + 1;
    // get the day of the month
    const day = today.getDate();
    
    // format the date in mm-dd-yyyy format
    const formattedDate = month + "-" + day + "-" + year;

    return (
       
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href={`/${slug}`}>
        <img className="rounded-t-lg" src={image}  alt={imgAlt}  />
    </a>
            <div className="p-5 space-y-2">
                <small>{date ?? formattedDate}</small>
        <a href={`/${slug}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
                <p>{description ?? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam odio nobis."}</p>
                
        <a href={`/${slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View Event
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

    )
}