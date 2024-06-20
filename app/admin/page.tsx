"use client";
import AuthGuard from "./_components/authGuard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@prisma/client";
import { useEffect, useState } from "react";
import TableData from "./_components/tableData";
import { Dot, Loader, Loader2 } from "lucide-react";

export default function Admin() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [formList, setFormList] = useState<Form[]>([]);

  useEffect(() => {
    const fetchFormList = async () => {
      const res = await fetch(`/api/form?sort=asc`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { data } = await res.json();
      if (data.length) {
        setFormList(data);
      }
    };

    fetchFormList();
  }, []);

  const handleExport = async () => {
    try {
      setIsExporting(true);
      const response = await fetch("/api/excel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formList }),
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "data.xlsx";
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        console.error("Export failed");
      }
      setIsExporting(false);
    } catch (error) {
      console.log(error);
      setIsExporting(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsOpen(false);
    window.location.reload();
  };
  return (
    <section className="w-full h-full">
      <AuthGuard>
        <div className="font-semibold lg:text-[42px] text-3xl text-crystalBlue flex items-center justify-between">
          <p>Welcome to Cascades Admin Section</p>
          <Button
            onClick={handleExport}
            disabled={isExporting || !formList.length}
          >
            {isExporting ? (
              <div className="flex items-center justify-center gap-3">
                <Loader2 className="animate-spin" />
                <p>Exporting...</p>
              </div>
            ) : (
              <p>Export Excel</p>
            )}
          </Button>
        </div>
        <TableData data={formList} />
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Logout
        </Button>
        <Dialog open={isOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Logout</DialogTitle>
              <DialogDescription>
                Are you sure you want to logout?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant={"secondary"} onClick={() => setIsOpen(false)}>
                No
              </Button>
              <Button onClick={handleLogout}>Yes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </AuthGuard>
    </section>
  );
}
