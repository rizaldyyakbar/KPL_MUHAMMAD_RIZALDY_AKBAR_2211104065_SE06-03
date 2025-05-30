# ─── Install library yang dibutuhkan ─────────────────────────
!pip install fastapi uvicorn nest-asyncio pyngrok

# ─── Import Library ───────────────────────────────────────────
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import nest_asyncio
from pyngrok import ngrok, conf
import uvicorn

# ─── Inisialisasi Aplikasi ───────────────────────────────────
app = FastAPI()

# ─── Autentikasi Ngrok (ganti token sesuai akun) ─────────────
conf.get_default().auth_token = "2xoe1iLvB1oewvMCMdaY9KYsHiZ_6UTySbRnStUwA48EVf3jY"

# ─── Model Data Mahasiswa ────────────────────────────────────
class Mahasiswa(BaseModel):
    nama: str
    nim: str

# ─── Data Statis Mahasiswa (anggota kelompok) ────────────────
mahasiswa_storage: List[dict] = [
    {"nama": "Muhammad Rizaldy Akbar", "nim": "2211104065"},
    {"nama": "JeBron Lames", "nim": "1302000001"},
    {"nama": "Ctephen Surry", "nim": "1302000002"}
]

# ─── ENDPOINTS ────────────────────────────────────────────────

@app.get("/api/mahasiswa")
def get_all_mahasiswa():
    return mahasiswa_storage

@app.get("/api/mahasiswa/{index}")
def get_mahasiswa(index: int):
    if 0 <= index < len(mahasiswa_storage):
        return mahasiswa_storage[index]
    raise HTTPException(status_code=404, detail="Mahasiswa tidak ditemukan")

@app.post("/api/mahasiswa")
def add_mahasiswa(mhs: Mahasiswa):
    mahasiswa_storage.append(mhs.dict())
    return {"status": "berhasil", "pesan": "Mahasiswa berhasil ditambahkan"}

@app.delete("/api/mahasiswa/{index}")
def delete_mahasiswa(index: int):
    if 0 <= index < len(mahasiswa_storage):
        deleted = mahasiswa_storage.pop(index)
        return {"status": "berhasil", "pesan": "Mahasiswa dihapus", "data": deleted}
    raise HTTPException(status_code=404, detail="Mahasiswa tidak ditemukan")

# ─── Jalankan Server dengan Ngrok ────────────────────────────
nest_asyncio.apply()
tunnel_url = ngrok.connect(8000)
print("🚀 Swagger UI:", tunnel_url.public_url + "/docs")
print("🚀 Endpoint API:", tunnel_url.public_url)

uvicorn.run(app, port=8000)
