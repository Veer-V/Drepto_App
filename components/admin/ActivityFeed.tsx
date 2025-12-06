import React from 'react';

const ActivityFeed = () => {
    const activities = [
        { id: 1, user: 'Admin', action: 'Added new medicine', target: 'Paracetamol 500mg', time: '2 mins ago' },
        { id: 2, user: 'Dr. Sarah', action: 'Updated lab test', target: 'Thyroid Profile', time: '1 hour ago' },
        { id: 3, user: 'Admin', action: 'Started new project', target: 'Free Dental Camp', time: '3 hours ago' },
        { id: 4, user: 'System', action: 'Backup completed', target: 'Database', time: '5 hours ago' },
        { id: 5, user: 'Admin', action: 'Deleted medicine', target: 'Expired Syrup', time: '1 day ago' },
    ];

    return (
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
            <div className="p-4 border-b bg-gray-50">
                <h3 className="font-semibold text-gray-800">Recent Activity</h3>
            </div>
            <div className="divide-y">
                {activities.map((item) => (
                    <div key={item.id} className="p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                            {item.user[0]}
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-800">
                                <span className="font-medium">{item.user}</span> {item.action} <span className="font-medium text-primary">{item.target}</span>
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-3 text-center border-t">
                <button className="text-sm text-primary font-medium hover:underline">View All History</button>
            </div>
        </div>
    );
};

export default ActivityFeed;
