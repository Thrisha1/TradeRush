import Link from "next/link"
export default function Trading_option_select() {
    return (
        <div className="flex w-100 h-screen justify-center items-center">
            <Link href="/tradingpage" class="h-max mr-20 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">IntraDay</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Intraday trading, also called day trading, is the buying and selling of stocks and other financial instruments within the same day. In other words, intraday trading means all positions are squared-off before the market closes.</p>
            </Link>
            <Link href="/longterm" class="h-max ml-20 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Long Term</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Long term investments are investments that offer higher returns after several years; typically five years or more. These involve more market risks and higher returns thus allowing you to invest in aggressive market instruments.</p>
            </Link>
        </div>
    )
}