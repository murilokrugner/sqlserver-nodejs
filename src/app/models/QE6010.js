/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QE6010', {
    QE6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE6_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QE6_REVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE6_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE6_DESCPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QE6_DESCIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QE6_DESCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QE6_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE6_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QE6_APLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    QE6_CROQUI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QE6_DTCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QE6_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QE6_DTDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QE6_RVDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE6_PTOLER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QE6_PEDEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QE6_DOCOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QE6_SHLF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QE6_UNSHEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QE6_UNMED1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE6_UNAMO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE6_FATCO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QE6_TIPCO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QE6_UNMED2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE6_UNAMO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE6_FATCO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QE6_TIPCO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QE6_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QE6_SITREV: {
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
    tableName: 'QE6010'
  });
};
