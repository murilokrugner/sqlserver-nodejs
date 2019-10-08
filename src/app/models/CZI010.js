/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CZI010', {
    CZI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CZI_DTOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CZI_PERMRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CZI_NRMRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CZI_NRLV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CZI_PROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CZI_NRRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CZI_ALIAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CZI_NRRGAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CZI_TPRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CZI_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CZI_DOCKEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    CZI_DOCREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CZI_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CZI_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CZI_OPC: {
      type: "IMAGE",
      allowNull: true
    },
    CZI_PRODOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CZI_OPCORD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
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
    tableName: 'CZI010'
  });
};
