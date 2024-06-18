import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
const getSalesData = () => {};

const Page = () => {
  return (
    <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-4">
      <DashboardCard title="Sales" subtitle="Test" body="body" />
      <DashboardCard title="Sales" subtitle="Test" body="body" />
      <DashboardCard title="Sales" subtitle="Test" body="body" />
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
      <CardHeader>{title}</CardHeader>
      <CardDescription>{subtitle}</CardDescription>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
};
