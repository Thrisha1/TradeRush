export default function Card({name,desc,link}) {
    return(
        
        <div class="max-w-xs max-h-lg bg-white border border-white-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-5">
            <a href="#">
            <iframe class="rounded" width="315" height="150" src={link} title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </a>
            <div class="p-5 ">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
                
            </div>
        </div>

    )
}