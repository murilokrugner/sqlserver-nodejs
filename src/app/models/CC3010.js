/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CC3010', {
    CC3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CC3_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CC3_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CC3_CSECAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC3_CDIVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CC3_CGRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CC3_CCLASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    CC3_MSBLQL: {
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
    },
    CC3_CODSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'CC3010'
  });
};
