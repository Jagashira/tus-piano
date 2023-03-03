// @ts-nocheck
import React, { useEffect, useRef } from "react";
// import "./styles.css";

const Rain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // canvasの幅と高さをウィンドウサイズに合わせる
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 要素を作成する関数
    const createCircle = () => {
      // 円の半径をランダムで決定
      const r = Math.floor(Math.random() * 20) + 5;
      // 円の座標をランダムで決定
      const x = Math.floor(Math.random() * canvas.width);
      const y = -r;
      // 円の色を決定
      const hue = Math.floor(Math.random() * 360);
      // 円を描画
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.fill();

      // 波紋を描画
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
      gradient.addColorStop(0, `hsla(${hue}, 100%, 50%, 0.8)`);
      gradient.addColorStop(1, `hsla(${hue}, 100%, 50%, 0)`);
      ctx.beginPath();
      ctx.arc(x, y, r + 30, 0, 2 * Math.PI);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    // アニメーションのループ関数
    const animate = () => {
      // 画面をクリア
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // 円を生成
      createCircle();
      // 50ms毎にアニメーションのループを繰り返す
      setTimeout(() => requestAnimationFrame(animate), 50);
    };

    // アニメーションのループを開始する
    animate();

    // ウィンドウサイズが変更されたときにcanvasのサイズを更新する
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // コンポーネントがアンマウントされたときにイベントリスナーを削除する
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas" />;
};

export default Rain;
