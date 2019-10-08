/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTV010', {
    CTV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTV_CUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTV_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTV_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTV_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTV_DEBITO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTV_CREDIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTV_TPSALD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTV_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTV_ATUDEB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTV_ATUCRD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTV_ANTDEB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTV_ANTCRD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTV_LPDEB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTV_LPCRD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTV_SLCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTV_DTLP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CTV_LP: {
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
    tableName: 'CTV010'
  });
};
