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
import { ChangeEvent, useEffect, useState } from "react";
import TableData from "./_components/tableData";
import { Loader2, MoveLeftIcon, Power, Search } from "lucide-react";
import Link from "next/link";
import useDebounce from "@/hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function Admin() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [formList, setFormList] = useState<Form[]>([]);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const search = params.get("search") || "";

  useDebounce(
    () => {
      handleSearch();
    },
    1000,
    [search]
  );

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
    window.scrollTo(0, 0);
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchResult = e.target.value;
    if (searchResult) {
      params.set("search", searchResult);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSearch = async () => {
    try {
      const res = await fetch(
        `/api/form?sort=asc${params.toString() && `&${params.toString()}`}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        const { data } = await res.json();
        console.log(data, "hmm");
        setFormList(data);
      }
    } catch (error) {
      console.log("ERR: ", error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsOpen(false);
    window.location.reload();
  };
  return (
    <section className="w-full h-full overflow-auto">
      <AuthGuard>
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <div className="flex items-center gap-4">
              <MoveLeftIcon className="h-7 w-7" />
              <p>Back to Home</p>
            </div>
          </Link>
          <Button variant="secondary" onClick={() => setIsOpen(true)}>
            <div className="flex items-center gap-3">
              <p>Logout</p>
              <Power className="h-4 w-4" />
            </div>
          </Button>
        </div>
        <div className="font-semibold lg:text-[42px] text-3xl text-crystalBlue">
          <p>Cascades Admin Section</p>
        </div>
        <div className="text-darkLiver text-3xl font-bold flex items-center justify-between">
          <p>Form Table</p>
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
        <div className="flex items-center relative p-1">
          <Search className="absolute left-3 h-5 w-5" />
          <Input
            className="pl-10 py-2 lg:w-[30%] md:w-[50%] w-full focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Search by Name"
            onChange={handleChange}
            defaultValue={search}
          />
        </div>
        <TableData data={formList} />
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
