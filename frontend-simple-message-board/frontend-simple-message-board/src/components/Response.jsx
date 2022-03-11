export default function Response({data}) {
    return (
        <div className=" bg-white rounded-lg shadow-md my-4">
            <div className="px-8 flex flex-col text-purple-800">
                <div className="flex flex-col mt-4 sm:flex-row text-xs  justify-between">
                    <div className="mb-2 text-base font-semibold">{data.author}</div>
                    <div className="mb-2 font-thin">Time: {data.getFormatResonseDate()}</div>
                </div>
                <div className="mb-4 text-sm rounded-sm">
                    {data.message}
                </div>
            </div>
        </div>
    );
}