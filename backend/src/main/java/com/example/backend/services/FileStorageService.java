package com.example.backend.services;

import org.springframework.stereotype.Service;

@Service
public class FileStorageService {
    
    // private final String uploadDir = "src/main/resources/static/images/";

    // public String storeFile(MultipartFile file){
    //     String fileName = StringUtils.cleanPath(file.getOriginalFilename());
    //     Path path = Paths.get(uploadDir, fileName);

    //     try(InputStream inputStream = file.getInputStream()){
    //         Files.copy(inputStream, path, StandardCopyOption.REPLACE_EXISTING);
    //     } catch(IOException e){
    //         throw new RuntimeErrorException(null, "Error al guardar la imagen: " + fileName);
    //     }

    //     return fileName;
    // }
}
