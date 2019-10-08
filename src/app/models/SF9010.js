/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SF9010', {
    F9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F9_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F9_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    F9_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F9_LOJAFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F9_DOCNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F9_SERNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F9_ITEMNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    F9_PROPRIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F9_NLRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F9_FLRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F9_DTENTNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F9_DTEMINE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F9_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F9_LOJACLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F9_DOCNFS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F9_SERNFS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F9_DTEMINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F9_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F9_VALICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F9_ROTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    F9_CFOENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    F9_PICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F9_ICMIMOB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F9_VLESTOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F9_BXICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F9_FCA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F9_FILTRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F9_QTDPARC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F9_SLDPARC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F9_VALUPF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F9_ITEMNFS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    F9_VIDUTIL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F9_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F9_BAIXAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F9_CODBAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F9_FUNCIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    F9_PARCRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F9_VALICCO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F9_VALICST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F9_VALFRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F9_VALICMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    F9_DTINIUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F9_VLDBATV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F9_SDOCNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F9_SDOCNFS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'SF9010'
  });
};
