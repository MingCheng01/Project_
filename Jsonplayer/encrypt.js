const fs = require('fs');
var wasm_data = fs.readFileSync('./105431905475.wasm')
var buffer = new Uint8Array(wasm_data);
var wasm_env = {
    global: {},
    env: {
        "runtime.ticks": () => {
            return timeOrigin + performance.now();
        },
        "syscall/js.valueGet": (retval, v_addr, p_ptr, p_len) => {
            let prop = loadString(p_ptr, p_len);
            let value = loadValue(v_addr);
            let result = Reflect.get(value, prop);
            console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++')
            if (typeof result === 'function') {
                console.log(result())
            } else {
                console.log(result)
            }
            storeValue(retval, result);
        },
        "syscall/js.valuePrepareString": (ret_addr, v_addr) => {
            const s = String(loadValue(v_addr));
            const str = encoder.encode(s);
            storeValue(ret_addr, str);
            setInt64(ret_addr + 8, str.length);
        },
        "syscall/js.valueLoadString": (v_addr, slice_ptr, slice_len, slice_cap) => {
            const str = loadValue(v_addr);
            loadSlice(slice_ptr, slice_len, slice_cap).set(str);
        },
        "syscall/js.finalizeRef": () => {
        },
        "syscall/js.stringVal": (ret_ptr, value_ptr, value_len) => {
            const s = loadString(value_ptr, value_len);
            storeValue(ret_ptr, s);
        },
        "syscall/js.valueSet": (v_addr, p_ptr, p_len, x_addr) => {
            const v = loadValue(v_addr);
            const p = loadString(p_ptr, p_len);
            const x = loadValue(x_addr);
            Reflect.set(v, p, x);
        },
        "syscall/js.valueLength": (v_addr) => {
            return loadValue(v_addr).length;
        },
        "syscall/js.valueInvoke": (ret_addr, v_addr, args_ptr, args_len, args_cap) => {
            try {
                const v = loadValue(v_addr);
                const args = loadSliceOfValues(args_ptr, args_len, args_cap);
                storeValue(ret_addr, Reflect.apply(v, undefined, args));
                mem().setUint8(ret_addr + 8, 1);
            } catch (err) {
                storeValue(ret_addr, err);
                mem().setUint8(ret_addr + 8, 0);
            }
        },
        "syscall/js.valueIndex": (ret_addr, v_addr, i) => {
            storeValue(ret_addr, Reflect.get(loadValue(v_addr), i));
        },
        "syscall/js.valueCall": (ret_addr, v_addr, m_ptr, m_len, args_ptr, args_len, args_cap) => {
            const v = loadValue(v_addr);
            const name = loadString(m_ptr, m_len);
            const args = loadSliceOfValues(args_ptr, args_len, args_cap);
            try {
                const m = Reflect.get(v, name);
                storeValue(ret_addr, Reflect.apply(m, v, args));
                mem().setUint8(ret_addr + 8, 1);
            } catch (err) {
                storeValue(ret_addr, err);
                mem().setUint8(ret_addr + 8, 0);
            }
        },

    },
    wasi_snapshot_preview1: {
        // https://github.com/WebAssembly/WASI/blob/main/phases/snapshot/docs.md#fd_write
        fd_write: function (fd, iovs_ptr, iovs_len, nwritten_ptr) {
            let nwritten = 0;
            if (fd == 1) {
                for (let iovs_i = 0; iovs_i < iovs_len; iovs_i++) {
                    let iov_ptr = iovs_ptr + iovs_i * 8; // assuming wasm32
                    let ptr = mem().getUint32(iov_ptr + 0, true);
                    let len = mem().getUint32(iov_ptr + 4, true);
                    nwritten += len;
                    for (let i = 0; i < len; i++) {
                        let c = mem().getUint8(ptr + i);
                        if (c == 13) { // CR
                            // ignore
                        } else if (c == 10) { // LF
                            // write line
                            let line = decoder.decode(new Uint8Array(logLine));
                            logLine = [];
                            console.log(line);
                        } else {
                            logLine.push(c);
                        }
                    }
                }
            } else {
                console.error('invalid file descriptor:', fd);
            }
            mem().setUint32(nwritten_ptr, nwritten, true);
            return 0;
        },
        fd_close: () => 0,      // dummy
        fd_fdstat_get: () => 0, // dummy
        fd_seek: () => 0,       // dummy
        "proc_exit": (code) => {
            if (global.process) {
                // Node.js
                process.exit(code);
            } else {
                // Can't exit in a browser.
                throw 'trying to exit with code ' + code;
            }
        },
        random_get: (bufPtr, bufLen) => {
            crypto.getRandomValues(loadSlice(bufPtr, bufLen));
            return 0;
        },
    }
};

const encoder = new TextEncoder("utf-8");
    const decoder = new TextDecoder("utf-8");
var wasmobject = new WebAssembly.Instance(new WebAssembly.Module(buffer), wasm_env);
const loadString = (ptr, len) => {
    return decoder.decode(new DataView(wasmobject._inst.exports.memory.buffer, ptr, len));
}
console.log(wasmobject.encrypt('123'))