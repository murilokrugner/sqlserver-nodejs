/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CD5010', {
    CD5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD5_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CD5_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CD5_ESPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CD5_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CD5_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD5_TPIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD5_DOCIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    CD5_BSPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD5_ALPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD5_VLPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD5_BSCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD5_ALCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD5_VLCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD5_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD5_DTPCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CD5_DTPPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CD5_NDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CD5_DTDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CD5_LOCDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CD5_UFDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD5_DTDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CD5_CODEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CD5_NADIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CD5_SQADIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CD5_CODFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CD5_BCIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD5_DSPAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD5_VDESDI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD5_VLRII: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD5_VLRIOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD5_ACDRAW: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CD5_LOJEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD5_LOJFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CD5_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
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
    CD5_VTRANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD5_VAFRMM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD5_INTERM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD5_CNPJAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CD5_UFTERC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD5_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'CD5010'
  });
};
