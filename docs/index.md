---
title: Introducció a Linux
description: Apunts complets de Linux amb navegació, fitxers, permisos i usuaris
---

# Introducció a Linux

## 1. Navegació bàsica

### En quina carpeta estic

```bash
pwd
```

### Llistar contingut d'una carpeta

```bash
ls
```

### Llistar contingut d'una carpeta amb detall

```bash
ls -l
```

Amb la comanda anterior mostrem permissos, propietaris, mides i data de modificació

## 2. Navegar per carpetes

### Entrar en una carpeta

```bash
cd nomCarpeta
```

### Sortir d'una carpeta

```bash
cd ..
```

### Ruta absoluta vs relativa

Ruta absoluta:

```bash
cd /tmp
```

Funciona desde qualsevol ubicació

Ruta relativa:

```bash
cd tmp
```

Només funciona si la carpeta existeix dins del directori actual

## 3. Fitxers i carpetes

### Crear carpeta

```bash
mkdir NomCarpeta
```

Amb permisos d’administrador:

```bash
sudo mkdir NomCarpeta
```

### Esborrar carpeta

```bash
rm -R NomCarpeta
```

Força eliminació:

```bash
rm -rf NomCarpeta
```

### Canviar nom d'una carpeta

```bash
mv NomCarpeta NouNom
```

### Moure carpeta

```bash
mv Carpeta Destinacio/
```

### Crear o editar fitxer

```bash
nano nomArxiu
```

## 3. Permissos

### Visalitzar permissos

```bash
ls -l
```

Exemple de permissos:

```
-rwxr-xr-x
drwxr-xr-x
```

### Significat dels permissos

- r → lectura
- w → escriptura
- x → execució

Tipus:

- \- → fitxer
- d → directori

### Estructura dels permissos

```
rwx | rwx | rwx
 u    g    o
```

- u → usuari propietari
- g → grup
- o → altres

## X. Altres comandes

### Netejar pantalla

```bash
clear
```
