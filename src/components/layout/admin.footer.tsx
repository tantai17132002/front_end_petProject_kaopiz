'use client'
import { Layout } from 'antd';

const AdminFooter = () => {
    const { Footer } = Layout;

    return (
        <>
            <Footer style={{ 
                textAlign: 'center',
                background: "#006699",
                height: '80px',
                color: "#fff",
                marginTop: "20px"
                }}>
                Tấn Tài ©{new Date().getFullYear()} Created by @taitnt
            </Footer>
        </>
    )
}

export default AdminFooter;