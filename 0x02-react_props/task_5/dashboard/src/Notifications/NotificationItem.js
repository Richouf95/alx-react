import React from 'react'

function NotificationItem({ value, html = null, type }) {
    return (
        <>
            {
                html ? (
                    <li data={type} dangerouslySetInnerHTML={{ __html: html() }}></li>
                ) : (
                    <li data={type}>{value}</li>)
            }
        </>
    )
}

export default NotificationItem