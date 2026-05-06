import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, ClipboardCheck, UploadCloud, CalendarDays, AlertTriangle, CheckCircle2, Phone, FileText, Menu, X } from "lucide-react";

export default function FieldworkWebsite() {
  const [open, setOpen] = useState(false);

  const groups = [
    { group: "กลุ่มที่ 1", topic: "กายภาพชายฝั่ง", members: "กรอกชื่อสมาชิก 4–5 คน", submit: "แผนที่จุดศึกษา + ภาพถ่ายภาคสนาม" },
    { group: "กลุ่มที่ 2", topic: "ป่าชายเลนและระบบนิเวศ", members: "กรอกชื่อสมาชิก 4–5 คน", submit: "แบบบันทึกชนิดพืช + วิเคราะห์พื้นที่" },
    { group: "กลุ่มที่ 3", topic: "การใช้ที่ดินและชุมชน", members: "กรอกชื่อสมาชิก 4–5 คน", submit: "แผนที่การใช้ที่ดิน + ข้อสังเกต" },
    { group: "กลุ่มที่ 4", topic: "การท่องเที่ยวและภูมิทัศน์", members: "กรอกชื่อสมาชิก 4–5 คน", submit: "ภาพถ่ายพร้อมคำอธิบายเชิงภูมิศาสตร์" },
  ];

  const rules = [
    "แต่งกายสุภาพ เหมาะสมกับการเดินภาคสนาม และสวมรองเท้าที่ปลอดภัย",
    "ตรงต่อเวลา หากมาช้าจะกระทบต่อกำหนดการของทั้งกลุ่ม",
    "ดูแลอุปกรณ์ส่วนตัว โทรศัพท์ กล้อง และเอกสารบันทึกข้อมูล",
    "ห้ามแยกตัวออกจากกลุ่มโดยไม่ได้รับอนุญาต",
    "เคารพพื้นที่ศึกษา ชุมชนท้องถิ่น และไม่ทิ้งขยะในพื้นที่",
    "บันทึกพิกัด ภาพถ่าย และข้อสังเกตให้ครบถ้วนตามใบงาน",
  ];

  const timeline = [
    { time: "06:00", activity: "ออกเดินทางจากมหาวิทยาลัย" },
    { time: "10:00", activity: "ศึกษาพื้นที่ภาคสนาม จุดที่ 1" },
    { time: "12:00", activity: "พักรับประทานอาหารกลางวัน" },
    { time: "13:30", activity: "เก็บข้อมูลภาคสนาม จุดที่ 2" },
    { time: "16:00", activity: "สรุปข้อมูลรายกลุ่ม / เดินทางเข้าที่พัก" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg">
            <MapPin className="w-6 h-6" />
            Fieldwork GEO
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#rules">ข้อปฏิบัติ</a>
            <a href="#schedule">กำหนดการ</a>
            <a href="#groups">รายชื่อกลุ่ม</a>
            <a href="#submit">การส่งงาน</a>
            <a href="#contact">ติดต่อ</a>
          </div>
        </div>
        {open && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm bg-white">
            <a href="#rules">ข้อปฏิบัติ</a>
            <a href="#schedule">กำหนดการ</a>
            <a href="#groups">รายชื่อกลุ่ม</a>
            <a href="#submit">การส่งงาน</a>
            <a href="#contact">ติดต่อ</a>
          </div>
        )}
      </nav>

      <header className="bg-gradient-to-br from-emerald-700 to-sky-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="uppercase tracking-widest text-sm text-emerald-100">Geography Field Trip</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">เว็บไซต์ประกอบการออกภาคสนาม</h1>
            <p className="mt-5 text-lg text-slate-100">รวมข้อปฏิบัติ กำหนดการ รายชื่อสมาชิกกลุ่ม ใบงาน และช่องทางการส่งงาน สำหรับนิสิตรายวิชาภูมิศาสตร์และภูมิสารสนเทศ</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#submit" className="bg-white text-emerald-800 px-5 py-3 rounded-2xl font-semibold shadow">ส่งงานภาคสนาม</a>
              <a href="#groups" className="border border-white/70 px-5 py-3 rounded-2xl font-semibold">ดูรายชื่อกลุ่ม</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/15 p-6 rounded-3xl shadow-xl border border-white/20">
            <h2 className="text-2xl font-bold">ข้อมูลกิจกรรม</h2>
            <div className="mt-4 space-y-3 text-slate-100">
              <p><b>รายวิชา:</b> การทำแผนที่ / ภูมิสารสนเทศ</p>
              <p><b>พื้นที่ศึกษา:</b> จังหวัดประจวบคีรีขันธ์</p>
              <p><b>ผู้รับผิดชอบ:</b> ภาควิชาภูมิศาสตร์</p>
              <p><b>รูปแบบงาน:</b> เก็บข้อมูลภาคสนาม + วิเคราะห์เชิงพื้นที่ + รายงานกลุ่ม</p>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-14">
        <section id="rules">
          <div className="flex items-center gap-2 mb-5">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
            <h2 className="text-3xl font-bold">ข้อปฏิบัติในการออกภาคสนาม</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {rules.map((rule, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                <p>{rule}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="schedule">
          <div className="flex items-center gap-2 mb-5">
            <CalendarDays className="w-6 h-6 text-sky-700" />
            <h2 className="text-3xl font-bold">กำหนดการเบื้องต้น</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
            {timeline.map((item, i) => (
              <div key={i} className="grid grid-cols-4 md:grid-cols-6 border-b last:border-b-0">
                <div className="col-span-1 bg-slate-100 p-4 font-bold text-sky-800">{item.time}</div>
                <div className="col-span-3 md:col-span-5 p-4">{item.activity}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="groups">
          <div className="flex items-center gap-2 mb-5">
            <Users className="w-6 h-6 text-emerald-700" />
            <h2 className="text-3xl font-bold">รายชื่อสมาชิกกลุ่ม</h2>
          </div>
          <div className="overflow-x-auto bg-white rounded-3xl shadow-sm border">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="p-4">กลุ่ม</th>
                  <th className="p-4">หัวข้อศึกษา</th>
                  <th className="p-4">สมาชิก</th>
                  <th className="p-4">งานที่ต้องส่ง</th>
                </tr>
              </thead>
              <tbody>
                {groups.map((g, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-4 font-semibold">{g.group}</td>
                    <td className="p-4">{g.topic}</td>
                    <td className="p-4">{g.members}</td>
                    <td className="p-4">{g.submit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="submit" className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-white p-7 rounded-3xl shadow-sm border">
            <div className="flex items-center gap-2 mb-4">
              <UploadCloud className="w-6 h-6 text-indigo-700" />
              <h2 className="text-3xl font-bold">การส่งงาน</h2>
            </div>
            <p className="text-slate-600 mb-5">นิสิตส่งงานรายกลุ่มผ่าน Google Form / LMS / Microsoft Teams ตามที่อาจารย์กำหนด</p>
            <a href="https://forms.gle/" target="_blank" className="inline-block bg-indigo-700 text-white px-5 py-3 rounded-2xl font-semibold shadow">เปิดแบบฟอร์มส่งงาน</a>
          </div>
          <div className="bg-white p-7 rounded-3xl shadow-sm border">
            <div className="flex items-center gap-2 mb-4">
              <ClipboardCheck className="w-6 h-6 text-emerald-700" />
              <h3 className="text-2xl font-bold">รายการไฟล์ที่ต้องส่ง</h3>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li>1. รายงานสรุปผลการศึกษาภาคสนาม PDF</li>
              <li>2. แผนที่หรือแผนผังพื้นที่ศึกษา</li>
              <li>3. ตารางข้อมูลพิกัด / แบบบันทึกภาคสนาม</li>
              <li>4. ภาพถ่ายพร้อมคำอธิบายเชิงภูมิศาสตร์</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="bg-slate-900 text-white p-8 rounded-3xl grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-3">ติดต่อผู้สอน / ผู้ประสานงาน</h2>
            <p className="text-slate-300">ใช้ส่วนนี้สำหรับแจ้งช่องทางติดต่อ กรณีฉุกเฉิน การลาป่วย หรือการประสานงานระหว่างออกภาคสนาม</p>
          </div>
          <div className="space-y-3">
            <p className="flex items-center gap-2"><Phone className="w-5 h-5" /> โทร: 000-000-0000</p>
            <p className="flex items-center gap-2"><FileText className="w-5 h-5" /> Email: example@university.ac.th</p>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm text-slate-500 py-8">
        © 2026 Geography Fieldwork Website. Edit text, links, group names, and schedule as needed.
      </footer>
    </div>
  );
}
