// import { db } from '../authFirbase';
// import React, { useState, useEffect } from 'react';
// import { Table, Tag, Button, Card } from 'antd';
// import { CheckCircleOutlined } from '@ant-design/icons';
// import { collection, getDocs } from 'firebase/firestore';

// function YourOrderProduct() {
//   const [purchaseItems, setPurchaseItems] = useState([]);

//   // Fetch data from Firebase
//   async function fetchData() {
//     const querySnapshot = await getDocs(collection(db, "BuyProduct"));
//     const chek =[]
//     querySnapshot.forEach((doc) => {
     
//      chek.push({...doc.data()})
//     });
    
//     setPurchaseItems(chek)
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);
//   console.log(purchaseItems)

  
  
//   const purchaseData = 
//   // [
//   //   {
//   //     key: '1',
//   //     username: 'John Doe',
//   //     product: 'Wireless Headphones',
//   //     purchaseDate: '2024-10-01',
//   //     status: 'Delivered',
//   //   },
//   //   {
//   //     key: '2',
//   //     username: 'Jane Smith',
//   //     product: 'Smartphone',
//   //     purchaseDate: '2024-09-28',
//   //     status: 'Pending',
//   //   },
//   // ]
//   purchaseItems?.map((item, index) => ({
//     key: item.id || index.toString(),
//     product: item.title || 'Unknown Product',
//     purchaseDate: item.purchaseDate || 'Unknown Date',  // Assuming purchaseDate exists in Firebase
//     status: item.status || 'Pending',  // Assuming status exists in Firebase
//   }));
  
//   const columns = [
//     {
//       title: 'Product',
//       dataIndex: 'product',
//       key: 'product',
//     },
//     {
//       title: 'Purchase Date',
//       dataIndex: 'purchaseDate',
//       key: 'purchaseDate',
//     },
//     {
//       title: 'Status',
//       dataIndex: 'status',
//       key: 'status',
//       render: (status) => (
//         <Tag color={status === 'Delivered' ? 'green' : 'orange'}>
//           {status}
//         </Tag>
//       ),
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (record) => (
//         <Button type="primary" icon={<CheckCircleOutlined />}>
//           View Details
//         </Button>
//       ),
//     },
//   ];

//   return (
//     <Card title="Your Purchase List" style={{ margin: 20 }}>
//       <Table columns={columns} dataSource={purchaseData} />
//     </Card>
//   );
// }

// export default YourOrderProduct;
