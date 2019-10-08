/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NVH010', {
    NVH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NVH_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NVH_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    NVH_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NVH_CAMPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NVH_WHERE: {
      type: "IMAGE",
      allowNull: true
    },
    NVH_PROPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    NVH_F3DIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    NVH_F3CONS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NVH_F3MULT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    NVH_TPPESQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'NVH010'
  });
};
