import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import db from "@/db/db";
import { formatCurrency, formatNumber } from "@/lib/formatter";
import React from "react";

// getters
const getSalesData = async () => {
  const data = await db.order.aggregate({
    _sum: { totalAmount: true },
    _count: true,
  });
  return {
    amount: (data._sum.totalAmount || 0) / 100,
    numberOfSales: data._count,
  };
};
const getUserData = async () => {
  const [userCount, orderData] = await Promise.all([
    db.customer.count(),
    db.order.aggregate({
      _sum: { totalAmount: true },
    }),
  ]);
  return {
    userCount,
    averageValuePerUser:
      userCount === 0 ? 0 : (orderData._sum.totalAmount || 0) / userCount / 100,
  };
};
const Page = async () => {
  const [salesData, userData] = await Promise.all([
    getSalesData(),
    getUserData(),
  ]);
  // const salesData = await getSalesData();
  // const userData = await getUserData();
  return (
    <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-4">
      <DashboardCard
        title="Sales"
        subtitle={`${formatNumber(salesData.numberOfSales)} orders`}
        body={formatCurrency(salesData.amount)}
      />
      <DashboardCard
        title="Cusotmer"
        subtitle={`${formatCurrency(
          userData.averageValuePerUser
        )} Average Value`}
        body={formatNumber(userData.userCount)}
      />
      <DashboardCard
        title="Sales"
        subtitle={`${formatNumber(salesData.numberOfSales)} orders`}
        body={formatCurrency(salesData.amount)}
      />

      {/* <DashboardCard title="Cusotmer" subtitle="Test" body="body" />
      <DashboardCard title="Sales" subtitle="Test" body="body" /> */}
    </div>
  );
};

export default Page;

type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string;
};
const DashboardCard = ({ title, subtitle, body }: DashboardCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
};
