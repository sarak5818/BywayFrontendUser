import { useEffect, useState } from "react";

const statItems = [
    { id: 1, value: 10000, label: "Students" },
    { id: 2, value: 500, label: "Courses" },
    { id: 3, value: 120, label: "Instructors" },
    { id: 4, value: 50000, label: "Hours of Content" },
];

const StatsSection = () => {
    const [counts, setCounts] = useState(statItems.map(() => 0));

    useEffect(() => {
        const duration = 1500;
        const startTime = performance.now();

        const animate = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCounts(statItems.map((s) => Math.floor(s.value * progress)));
            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, []);

    return (
        <section
            className="w-full bg-white opacity-100"
            style={{
                width: "1441px",
                height: "149px",
                paddingTop: "40px",
                paddingRight: "80px",
                paddingBottom: "40px",
                paddingLeft: "80px",
            }}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                {statItems.map((s, index) => (
                    <div key={s.id} className="flex flex-col items-center">
                        <div className="text-3xl font-bold text-gray-900">
                            {counts[index].toLocaleString()}+
                        </div>
                        <div className="text-gray-500 text-sm">{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
