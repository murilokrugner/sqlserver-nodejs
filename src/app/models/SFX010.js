/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFX010', {
    FX_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FX_TIPOMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FX_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FX_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FX_ESPECIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    FX_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FX_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FX_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    FX_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    FX_TPCLASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FX_CLASCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FX_GRPCLAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FX_CLASSIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FX_VALTERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FX_TIPOREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FX_RECEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FX_LOJAREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FX_TIPSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FX_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FX_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FX_PERFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    FX_AREATER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FX_TERMINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FX_VOL115: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    FX_CHV115: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FX_TPASSIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FX_ESTREC: {
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
    FX_CODUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    FX_ESTHIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FX_ESTMOTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    FX_ESTCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FX_CLASSIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FX_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'SFX010'
  });
};
