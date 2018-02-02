/* eslint-disable no-console */
/* eslint-disable node/no-unpublished-require */

const fns = [
  // definitions taken from @types/fs-extra

  'access',            // export function access(path: string | Buffer, callback: (err: NodeJS.ErrnoException) => void): void;
  'appendFile',        // export function appendFile(file: string | Buffer | number, data: any, options: { encoding?: string; mode?: number | string; flag?: string; },
  'chmod',             // export function chmod(path: string | Buffer, mode: string | number, callback: (err: NodeJS.ErrnoException) => void): void;
  'chown',             // export function chown(path: string | Buffer, uid: number, gid: number): Promise<void>;
  'close',             // export function close(fd: number, callback: (err: NodeJS.ErrnoException) => void): void;
  'copy',              // export function copy(src: string, dest: string, options?: CopyOptions): Promise<void>;
  'copySync',          // export function copySync(src: string, dest: string, options?: CopyOptions): void;
  'createFile',        // export function createFile(file: string): Promise<void>;
  'createFileSync',    // export function createFileSync(file: string): void;
  'emptyDir',          // export function emptyDir(path: string): Promise<void>;
  'emptyDirSync',      // export function emptyDirSync(path: string): void;
  'ensureDir',         // export function ensureDir(path: string): Promise<void>;
  'ensureDirSync',     // export function ensureDir(path: string, callback: (err: Error) => void): void;
  'ensureFile',        // export function ensureFile(path: string): Promise<void>;
  'ensureFileSync',    // export function ensureFileSync(path: string): void;
  'ensureLink',        // export function ensureLink(src: string, dest: string): Promise<void>;
  'ensureLinkSync',    // export function ensureLinkSync(src: string, dest: string): void;
  'ensureSymlink',     // export function ensureSymlink(src: string, dest: string, type?: SymlinkType): Promise<void>;
  'ensureSymlinkSync', // export function ensureSymlinkSync(src: string, dest: string, type?: SymlinkType): void;
  'fchmod',            // export function fchmod(fd: number, mode: string | number, callback: (err: NodeJS.ErrnoException) => void): void;
  'fchwon',            // export function fchown(fd: number, uid: number, gid: number, callback: (err: NodeJS.ErrnoException) => void): void;
  'fdatasync',         // export function fdatasync(fd: number, callback: () => void): void;
  'fstat',             // export function fstat(fd: number, callback: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
  'fsync',             // export function fsync(fd: number, callback: (err: NodeJS.ErrnoException) => void): void;
  'ftruncate',         // export function ftruncate(fd: number, callback: (err: NodeJS.ErrnoException) => void): void;
  'futimes',           // export function futimes(fd: number, atime: number, mtime: number, callback: (err: NodeJS.ErrnoException) => void): void;
  'lchown',            // export function lchown(path: string | Buffer, uid: number, gid: number, callback: (err: NodeJS.ErrnoException) => void): void;
  'link',              // export function link(srcpath: string | Buffer, dstpath: string | Buffer, callback: (err: NodeJS.ErrnoException) => void): void;
  'lstat',             // export function lstat(path: string | Buffer, callback: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
  'mkdir',             // export function mkdir(path: string | Buffer, callback: (err: NodeJS.ErrnoException) => void): void;
  'mkdirp',            // export function mkdirs(dir: string, callback: (err: Error) => void): void;
  'mkdirpSync',        // export function mkdirpSync(dir: string): void;
  'mkdirs',            // export function mkdirs(dir: string): Promise<void>;
  'mkdirsSync',        // export function mkdirsSync(dir: string): void;
  'mkdtemp',           // export function mkdtemp(prefix: string): Promise<string>;
  'move',              // export function move(src: string, dest: string, options?: MoveOptions): Promise<void>;
  'moveSync',          // export function moveSync(src: string, dest: string, options?: MoveOptions): void;
  'open',              // export function open(path: string | Buffer, flags: string | number, callback: (err: NodeJS.ErrnoException, fd: number) => void): void;
  'outputFile',        // export function outputFile(file: string, data: any, options?: WriteFileOptions | string): Promise<void>;
  'outputFileSync',    // export function outputFileSync(file: string, data: any, options?: WriteFileOptions | string): void;
  'outputJSON',        // export function outputJSON(file: string, data: any, options?: WriteOptions): Promise<void>;
  'outputJSONSync',    // export function outputJSONSync(file: string, data: any, options?: WriteOptions): void;
  'outputJson',        // export function outputJson(file: string, data: any, options?: WriteOptions): Promise<void>;
  'outputJsonSync',    // export function outputJsonSync(file: string, data: any, options?: WriteOptions): void;
  'pathExists',        // export function pathExists(path: string): Promise<boolean>;
  'pathExistsSync',    // export function pathExistsSync(path: string): boolean;
  'read',              // export function read(fd: number, buffer: Buffer, offset: number, length: number, position: number | null,
  'readFile',          // export function readFile(file: string | Buffer | number, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
  'readJSON',          // export function readJSON(file: string, options?: ReadOptions): Promise<any>;
  'readJSONSync',      // export function readJSONSync(file: string, options?: ReadOptions): any;
  'readJson',          // export function readJson(file: string, options?: ReadOptions): Promise<any>;
  'readJsonSync',      // export function readJsonSync(file: string, options?: ReadOptions): any;
  'readdir',           // export function readdir(path: string | Buffer, callback: (err: NodeJS.ErrnoException, files: string[]) => void): void;
  'readlink',          // export function readlink(path: string | Buffer, callback: (err: NodeJS.ErrnoException, linkString: string) => any): void;
  'realpath',          // export function realpath(path: string | Buffer, callback: (err: NodeJS.ErrnoException, resolvedPath: string) => any): void;
  'remove',            // export function remove(dir: string): Promise<void>;
  'removeSync',        // export function removeSync(dir: string): void;
  'rename',            // export function rename(oldPath: string, newPath: string, callback: (err: NodeJS.ErrnoException) => void): void;
  'rmdir',             // export function rmdir(path: string | Buffer, callback: (err: NodeJS.ErrnoException) => void): void;
  'stat',              // export function stat(path: string | Buffer, callback: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
  'symlink',           // export function symlink(srcpath: string | Buffer, dstpath: string | Buffer, type: string, callback: (err: NodeJS.ErrnoException) => void): void;
  'truncate',          // export function truncate(path: string | Buffer, callback: (err: NodeJS.ErrnoException) => void): void;
  'unlink',            // export function unlink(path: string | Buffer, callback: (err: NodeJS.ErrnoException) => void): void;
  'utimes',            // export function utimes(path: string | Buffer, atime: number, mtime: number, callback: (err: NodeJS.ErrnoException) => void): void;
  'write',             // export function write(fd: number, buffer: Buffer, offset: number, length: number, position: number | null, callback: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;
  'writeFile',         // export function writeFile(file: string | Buffer | number, data: any, callback: (err: NodeJS.ErrnoException) => void): void;
  'writeJSON',         // export function writeJSON(file: string, object: any, options?: WriteOptions): Promise<void>;
  'writeJSONSync',     // export function writeJSONSync(file: string, object: any, options?: WriteOptions): void;
  'writeJson',         // export function writeJson(file: string, object: any, options?: WriteOptions): Promise<void>;
  'writeJsonSync',     // export function writeJsonSync(file: string, object: any, options?: WriteOptions): void;
]

function init() {
  let debug
  try {
    debug = require('debug')('fs')
    if (!debug.enabled || process.env.FS_DEBUG !== '1') return
    const fs = require('fs-extra')
    for (let name of fns) {
      const real = fs[name]
      fs[name] = (...args) => {
        debug('%s %o', name, args[0])
        return real(...args)
      }
    }
  } catch (err) {
    if (debug) debug(err)
    else console.error(err)
  }
}

init()
