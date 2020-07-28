import { decorate, observable } from "mobx";
import axios from "axios";
import products from "../products";

class VendorStore {
  vendors = [];

  fetchVendors = async () => {
    try {
      const response = await axios.get("http://localhost:8000/vendors");
      this.vendors = response.data;
      this.loading = false;
    } catch (error) {
      console.error("VendorStore ->fetchProduct ->error", error);
    }
  };
  createVendor = async (newVendor) => {
    try {
      const formData = new FormData();
      for (const key in newVendor) formData.append(key, newVendor[key]);
      const res = await axios.post("http://localhost:8000/vendors", formData);
      this.vendors.push(res.data);
    } catch (error) {
      console.log("VendorStore-> createVendor -> error", error);
    }
  };

  deleteVendor = async (vendorId) => {
    try {
      await axios.delete(`http://localhost:8000/vendors/${vendorId}`);
      this.vendors = this.vendors.filter((vendor) => vendor.id !== +vendorId);
    } catch (error) {
      console.log("VendorStore -> deleteVendor -> error", error);
    }
  };

  updateVendor = async (updatedVendor) => {
    try {
      const formData = new FormData();
      for (const key in updatedVendor) formData.append(key, updatedVendor[key]);
      await axios.put(
        `http://localhost:8000/vendors/${updatedVendor.id}`,
        formData
      );

      const vendor = this.vendors.find(
        (vendor) => vendor.id === updatedvendor.id
      );
      for (const key in vendor) vendor[key] = updatedVendor[key];
    } catch (error) {
      console.log("VendorStore -> updateVendor -> error", error);
    }
  };
}

class VendorStore {
  vendors = [];
  loading = true;
}

decorate(VendorStore, {
  products: observable,
  vendors: observable,
  loading: observable,
});

const vendorStore = new VendorStore();
vendorStore.fetchVendors();
export default vendorStore;
