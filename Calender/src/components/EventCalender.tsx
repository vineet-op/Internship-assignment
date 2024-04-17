import clsx from "clsx"
import { eachDayOfInterval, endOfMonth, format, getDay, isSameDay, isToday } from "date-fns"
import { startOfMonth } from "date-fns/startOfMonth"

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

interface Event {
    date: Date
    title: string
}

interface EvenetCalenderProps {
    events: Event[]
}

const EventCalender = ({ events }: EvenetCalenderProps) => {

    const Currentdate = new Date()
    const firstdayofMonth = startOfMonth(Currentdate)
    const lastdayofMonth = endOfMonth(Currentdate)

    const daysInMonth = eachDayOfInterval({
        start: firstdayofMonth,
        end: lastdayofMonth
    })

    const startingDayIndex = getDay(firstdayofMonth);


    return (
        <div className="container mx-auto p-4">

            <div className="mb-8">
                <h2 className="text-center">{format(Currentdate, "MMMM yyyy")}</h2>
            </div>

            <div className="grid grid-cols-7 gap-2">
                {WEEKDAYS.map((day) => {
                    return <div key={day} className="font-bold text-center">
                        {day}
                    </div>
                })}
                {Array.from({ length: startingDayIndex }).map((_, index) => {
                    return <div className="text-center border-lg bg-emerald-500 p-4" key={`empty-${index}`} />
                })}
                {daysInMonth.map((day, index) => {
                    return <div className={clsx("text-center border-lg bg-emerald-500 p-4",
                        {
                            "bg-gray-200": isToday(day),
                            "text-gray-900": isToday(day)
                        })}
                        key={index}>
                        {format(day, "d")}
                        {events.filter((event) => isSameDay(event.date, day)).map((event) => {
                            return <div className="bg-red-400" key={event.title}>
                                {event.title}
                            </div>
                        })}
                    </div>
                })}
            </div>
        </div>
    )
}

export default EventCalender