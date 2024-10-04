

const Banner = () => {
    return (
        <div className="bg-pink-100">
            <main className="relative">
                <div className="container mx-auto flex items-center justify-between py-20">
                    <div className="space-y-4">
                        <div className="text-red-500 text-sm">
                            NEW TREND
                        </div>
                        <h1 className="text-5xl font-bold">
                            SUMMER SALE STYLISH
                        </h1>
                        <h2 className="text-6xl font-bold text-gray-900">
                            WOMENS
                        </h2>
                        <a className="text-blue-600 underline" href="#">
                            DISCOVER MORE
                        </a>
                    </div>
                    <div>
                        <img alt="Woman in stylish brown sweater looking down" className="w-full h-auto" height="800" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-oP3mBNjy3Y3o2NJQUrbLYKGq.png?st=2024-10-01T13%3A56%3A38Z&amp;se=2024-10-01T15%3A56%3A38Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-10-01T06%3A40%3A13Z&amp;ske=2024-10-02T06%3A40%3A13Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=gvIp6ktk162WHc9Ib4B1q7NYMj88Xm6o4z7QJBMk4wI%3D" width="600" />
                    </div>
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-4 text-gray-700">
                    <a className="block" href="#">
                        <i className="fab fa-facebook-f">
                        </i>
                    </a>
                    <a className="block" href="#">
                        <i className="fab fa-twitter">
                        </i>
                    </a>
                    <a className="block" href="#">
                        <i className="fab fa-instagram">
                        </i>
                    </a>
                    <div className="text-xs rotate-90 transform origin-left">
                        FOLLOW US
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 transform rotate-90 origin-bottom-right text-gray-700 text-xs">
                    SCROLL
                </div>
            </main>
        </div>
    )
}

export default Banner
