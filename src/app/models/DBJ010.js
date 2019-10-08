/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DBJ010', {
    DBJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DBJ_FILDIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DBJ_SUGEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DBJ_TPSUG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DBJ_DOCCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DBJ_COMPRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DBJ_ENTREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DBJ_TPOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DBJ_TSTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DBJ_TPAGLU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DBJ_CONEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DBJ_RESERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DBJ_EMPENH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DBJ_PRVENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DBJ_PDCART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DBJ_SLDTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DBJ_METODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DBJ_DTDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DBJ_DTATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DBJ_INCREM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DBJ_DIASCO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DBJ_DEVVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DBJ_MFILIA: {
      type: "IMAGE",
      allowNull: true
    },
    DBJ_MTIPO: {
      type: "IMAGE",
      allowNull: true
    },
    DBJ_MGRUPO: {
      type: "IMAGE",
      allowNull: true
    },
    DBJ_MCATEG: {
      type: "IMAGE",
      allowNull: true
    },
    DBJ_MFILT: {
      type: "IMAGE",
      allowNull: true
    },
    DBJ_FILSQL: {
      type: "IMAGE",
      allowNull: true
    },
    DBJ_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DBJ_ESTSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DBJ_LTEEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
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
    tableName: 'DBJ010'
  });
};
